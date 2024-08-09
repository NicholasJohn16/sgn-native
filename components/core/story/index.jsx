import { Text, Image, View } from "react-native";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Truncate } from "@/components/helpers/truncate";
import { Avatar } from "@/components/core/actor/Avatar";
import { Header } from "@/components/core/story/Header";
import { Box } from '@/components/ui/box';
import { List as Comments } from "@/components/core/commentable/List";
import { Divider } from '@/components/ui/divider';
import { Toolbar } from "@/components/core/Toolbar/Toolbar";

export function Story({story, children}) {
    const subject = Object.hasOwn(story, 'subjects') ? story.subjects[0] : story.subject;
    const hasComments = Object.hasOwn(story, 'comments');

    return (
        <Card className="p-0 mb-4 border">
            <Header 
                author={subject}
                title={<Title title={children.title} />}
                creationTime={story.creationTime}
                owner={story.author != story.owner ? story.owner : null}
            />

            {children.body && 
            <>
                <Box className="p-4 border-t">
                    {children.body}
        
                    <Divider className="my-4" />
                    <Toolbar size="small" node={story} />
                </Box>
            </>
            }

            {hasComments && <Comments comments={story.comments} />}
        </Card>
    )
}

function Title({title}) {

    //leading-[18]
    return (
        <Heading
            textBreakStrategy='balanced'
            className="leading-[14] web:leading-4"
            numberOfLines={2}
        >
            {title}
        </Heading>
    )
}