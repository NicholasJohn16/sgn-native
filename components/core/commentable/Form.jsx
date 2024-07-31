import { Avatar } from '@/components/core/actor/Avatar';
import { HStack } from '@/components/ui/hstack';
import { useSession } from "@/contexts/auth";
import { Button, ButtonText } from '@/components/ui/button';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function Form({media, addComment}) {
    // change to use useRef instead
    const { currentUser } = useSession();
    const [ body, setBody ] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (body) => addComment(body),
        onSuccess: () => {
            console.log('success!');
            const result = queryClient.invalidateQueries(
                {queryKey: ['comments', {node: media.id.toString()}]},
                {queryKey: ['stories']}
            )
            console.log(result, 'result');
        }
    })

    const onCreateComment = () => {
        mutation.mutate(body);
        setBody('');
    }

    return (
        <>
            <HStack className="py-4" space="md">
                <Avatar actor={currentUser} className="w-8 h-8" />
                <Textarea className="h-auto flex-shrink rounded">
                    <TextareaInput
                        className="p-4 bg-white rounded"
                        multiline={true}
                        numberOfLines={4}
                        variant="outline"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </Textarea>
            </HStack>

            <Button className="w-auto ml-auto" onPress={() => onCreateComment()}>
                <ButtonText>Post Comment</ButtonText>
            </Button>
        </>
    )
}