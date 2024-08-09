import { useLocalSearchParams } from "expo-router";
import { Text, Pressable, View, ScrollView } from "react-native";
import { getNote } from "@/api/notes";
import { useQuery } from "@tanstack/react-query";
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/core/actor/Avatar';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Link } from 'expo-router';
import { Item as Note } from "@/features/notes/components/Item";
import { Form as CommentForm } from "@/components/core/commentable/Form";
import { Toolbar } from "@/components/core/Toolbar/Toolbar";
import { addCommentToNote, getCommentsForNote } from "@/api/notes";
import { List as Comments} from '@/components/core/commentable/List';
import { Center } from '@/components/ui/center';
import { Spinner } from '@/components/ui/spinner';

export default function NoteId() {
    const { noteId } = useLocalSearchParams();

    const { data: note, ...noteQuery } = useQuery({
        queryKey: ['note', { id: noteId }],
        queryFn: () => getNote(noteId)
    });

    const { data: comments = {data: []}, ...commentsQuery } = useQuery({
        queryKey: ['comments', {node: noteId }],
        queryFn: () => getCommentsForNote(noteId)
    });

    const reversedComments = comments.data.slice().reverse();

    if(noteQuery.isLoadingError || noteQuery.isError) {
        return (
            <Center className="h-full">
                <Text>Note Not Found</Text>
            </Center>
        )
    }

    if(noteQuery.isLoading) {
        return (
            <Loading />
        )
    }

    const addComment = (body) => {
        return addCommentToNote(note.id, body);
    }

    return (
        <ScrollView className="px-4">
            <Card className="border my-4">
                <HStack space="md" className="">
                    <Avatar actor={note.author} />
                    <VStack className="w-full justify-center">
                        <Text>{note.author.name}'s Notes</Text>
                        <HStack className="justify-between">
                            <Link href={`/notes/@/${note.author.id}`}>Notes</Link>
                            <Link
                                className="text-right"
                                href={`/people/${note.author.alias}`}
                            >
                                    Back to Profile
                            </Link>
                        </HStack>
                    </VStack>
                </HStack>
            </Card>

            <Toolbar node={note} />

            <Note note={note} className="my-4" />

            <Comments comments={reversedComments} size="large" />

            <CommentForm media={note} addComment={addComment} />

        </ScrollView>
    )
}

function Loading() {
    return (
        <Center className="h-full">
            <Spinner size="large" />
        </Center>
    )
}