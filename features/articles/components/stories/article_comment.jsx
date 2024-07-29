import { MediumLink } from "@/components/ui/medium/link";
import { Heading } from "@/components/ui/heading";
import { Truncate } from "@/components/helpers/truncate";
import { namesHelper } from '@/components/helpers/story';
import { Text } from "react-native";

export function Title({story}) {
    const  names = namesHelper(story);

    return <Text>{names} commented on the <MediumLink media={story.object} >Article</MediumLink></Text>
}

export function Body({story}) {
    return (
        <>
            <Heading size="2xl" bold={true}>
                <MediumLink media={story.object}>{story.object.name}</MediumLink>
            </Heading>
            <Text>
                <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
            </Text>
        </>
    )
}