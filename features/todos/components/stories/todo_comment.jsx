import { MediumLink } from "@/components/ui/medium/link";
import { Heading } from "@/components/ui/heading";
import { Truncate } from '@/components/helpers/truncate';
import { namesHelper } from '@/components/helpers/story';
import { Text } from "react-native";

export function Title({story}) {
    const names = namesHelper(story);

    return <>{names} commented on <MediumLink media={story.object}>to-do</MediumLink></>
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