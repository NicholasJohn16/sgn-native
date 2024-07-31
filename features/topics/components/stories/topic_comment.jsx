import { namesHelper } from '@/components/helpers/story';
import { MediumLink } from "@/components/core/medium/link";
import { Heading } from '@/components/ui/heading';
import { Truncate } from '@/components/helpers/truncate';
import { Text } from "react-native";

export function Title({story}) {
    const names = namesHelper(story);

    return <>{names} commented on the <MediumLink media={story.object}>topic</MediumLink></>
}

export function Body({story}) {
    return (
        <>
            <MediumLink media={story.object}><Heading>{story.object.name}</Heading></MediumLink>
            <Text><Truncate readMore={true}>{story.object.body}</Truncate></Text>
        </>
    )
}