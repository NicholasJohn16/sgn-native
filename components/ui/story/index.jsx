import { Text, Image, View } from "react-native";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Truncate } from "../../helpers/truncate";
import { Avatar } from "../actor/Avatar";

const stories = require.context('../../stories', true);

console.log("** BEFORE STORIES **");
console.log(stories, 'stories');
console.log(stories.keys(), 'keys');
console.log("** AFTER STORIES **");


export default function Story({story, index}) {
    const { Title, Body } = stories(`./${story.component}/${story.name}.jsx`);
    // console.log({ Title, Body }, 'module');
    const createdOn = new Date(story.creationTime);
    const subject = Object.hasOwn(story, 'subjects') ? story.subjects[0] : story.subject;
    const hasComments = Object.hasOwn(story, 'comments');

    return (
        <Card className="p-0 mb-2">
            {subject &&
                <HStack className="p-2 border-b">
                    <Avatar actor={subject} />
                    <VStack className="justify-around">
                        <Heading>
                            <Title story={story} />
                        </Heading>
                        <Text>{createdOn.toLocaleDateString()}</Text>
                    </VStack>
                </HStack>
            }
            
            <View className="px-2 pb-2">
                <Body story={story}/>
            </View>

            {hasComments && story.comments.map(comment => (<Comment comment={comment} />))}


        </Card>
    )
}

function Comment({comment}) {
    return (
        <VStack>
            <Avatar actor={comment.author }/>
            <Text><Truncate readMore={true}>{comment.body}</Truncate></Text>
        </VStack>
    )
}