import { useLocalSearchParams, router } from "expo-router";
import { useRef } from "react";
import { Pressable, View, ScrollView } from "react-native";
import { getNote } from "@/api/notes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/core/actor/Avatar';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Link } from 'expo-router';
import { Item as Note } from "@/features/notes/components/Item";
import { Toolbar } from "@/components/core/Toolbar/Toolbar";
import { Center } from '@/components/ui/center';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Textarea, TextareaInput} from '@/components/ui/textarea';
import { Button, ButtonText} from '@/components/ui/button';
import { editNote } from '@/api/notes';

export default function Page() {
    const { noteId } = useLocalSearchParams();
    const queryClient = useQueryClient();
    const inputRef = useRef();

    const mutation = useMutation({
        mutationFn: (newText) => editNote(noteId, {body: newText}),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['note', {id: noteId} ]
            });
        },
        onSettled: () => {
            router.navigate(`/notes/${noteId}`);
        }
    });

    const onEditNote = () => {
        mutation.mutate(inputRef.current.value);
    }

    const { data: note, ...query } = useQuery({
        queryKey: ['note', { id: noteId }],
        queryFn: () => getNote(noteId)
    });

    if(query.isLoading) {
        return (
            <Center className="h-full">
                <Spinner size="large" />
            </Center>
        )
    }

    return (
        <Box className="p-4">
            <Heading className="my-4">Edit Note</Heading>

            <Textarea className="my-4" size="md">
                <TextareaInput ref={inputRef} defaultValue={note.body} />
            </Textarea>

            <HStack space="md" className="flex-row-reverse">
                <Button onPress={onEditNote}>
                    <ButtonText action="primary">Update</ButtonText>
                </Button>
                <Button>
                    <ButtonText action="secondary">
                        <Link href={`/notes/${note.id}`}>Cancel</Link>
                    </ButtonText>
                </Button>
            </HStack>

        </Box>
    )
}