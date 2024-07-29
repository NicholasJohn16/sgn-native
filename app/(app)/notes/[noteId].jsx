import { useLocalSearchParams } from "expo-router";
import { Text, Pressable, View, ScrollView } from "react-native";
import { getNote } from "@/api/notes";
import { useQuery } from "@tanstack/react-query";
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/actor/Avatar';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Loading } from '@/components/Loading';
import { Link } from 'expo-router';
import { Item as Note } from "@/features/notes/components/Item";
import { Form as CommentForm } from "@/components/core/commentable/Form";
import { Toolbar } from "@/components/core/Toolbar/Toolbar";
import { addCommentToNote, getCommentsForNote } from "@/api/notes";
import { List as Comments} from '@/components/core/commentable/List';

export default function Page() {
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
            <Text>Note Not Found</Text>
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

    console.log(note, 'query.note');

    return (
        <ScrollView className="px-4">
            <Card className="border my-4">
                <HStack space="md" className="">
                    <Avatar actor={note.author} />
                    <VStack className="w-full justify-center">
                        {note.author.name}'s Notes
                        <HStack className="justify-between">
                            <Link href={`/notes/@${note.author.id}`}>Notes</Link>
                            <Link href={`/people/${note.author.alias}`}>Back to Profile</Link>
                        </HStack>
                    </VStack>
                </HStack>
            </Card>

            <Toolbar node={note} />

            <Note note={note} className="my-4" />

            {/* {reversedComments.map(comment => (
                <View className="my-4 p-4"><Text>{comment.body}</Text></View>
            ))} */}

            <Comments comments={reversedComments} size="large" />

            <CommentForm media={note} addComment={addComment} />

        </ScrollView>
    )
}