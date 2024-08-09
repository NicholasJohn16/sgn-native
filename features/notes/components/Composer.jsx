import { Button as GButton, ButtonText } from '@/components/ui/button';
import { TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from '@/api/notes';
import { useSession } from "@/contexts/auth";
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Pressable } from '@/components/ui/pressable';
import { Box } from '@/components/ui/box';

export function Button({showForm}) {
    return (
        <GButton
            variant="outline"
            size="xs"
            className="p-4 border"
            onPress={showForm}
            action="secondary"
        >
            <ButtonText>Note</ButtonText>
        </GButton>
    ) 
}

export function Form({setShowPlaceholder, showPlaceholder, inputRef}) {
    const [body, setBody] = useState('');
    const { currentUser } = useSession();
    const queryClient = useQueryClient();

    const isWhitespace = !/\S/.test(body);

    const mutation = useMutation({
        mutationFn: ({ownerId, data}) => {
            return createNote(ownerId, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['stories']}, {queryKey: ['notes']});
        }
    });

    const onCreateNote = () => {
        mutation.mutate({ownerId: currentUser.id, data: { body }});
        setBody('');
        setShowPlaceholder(true);
    }

    if(showPlaceholder) {
        return (
            <Pressable onPress={() => setShowPlaceholder(false)}>
                <Box className="border rounded p-4">
                    <Text className="text-muted">Share a note</Text>
                </Box>
            </Pressable>
        )
    }

    return (
        <View>
            <TextInput
                ref={inputRef}
                className="rounded border p-4"
                multiline={true}
                numberOfLines={4}
                placeholder='Share a note'
                onChange={e => setBody(e.target.value)}
                value={body}
            />
            <GButton 
                size="md"
                className="w-auto ml-auto mt-4"
                onPress={onCreateNote}
            >
                <ButtonText>Share</ButtonText>
            </GButton>
        </View>

    )
}