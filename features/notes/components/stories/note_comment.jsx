import { Truncate } from "@/components/helpers/truncate";
import { namesHelper } from '@/components/helpers/story';
import { MediumLink } from '@/components/ui/medium/link';
import { Text } from "react-native";

export function Title({story}) {
    const names = namesHelper(story);
    return <>{names} commented on the <MediumLink media={story.object}>note</MediumLink></>;
}

export function Body({story}) {
    return (
        <Text>
            <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
        </Text>
    )
}