import { Truncate } from "@/components/helpers/truncate";
import { MediumLink } from "@/components/core/medium/link";
import { namesHelper } from '@/components/helpers/story';
import { Heading } from '@/components/ui/heading';
import { Text } from "react-native";

export function Title({story}) {
    const names = namesHelper(story);
    return <>{names} commented on the <MediumLink media={story.object}>blog</MediumLink></>
}

export function Body({story}) {
    return (
        <>
            <MediumLink media={story.object}><Heading>{story.object.name}</Heading></MediumLink>
            <Text>
                <Truncate>{story.object.body}</Truncate>
            </Text>
        </>
    )
}