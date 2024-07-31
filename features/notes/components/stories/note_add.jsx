import { Truncate } from "@/components/helpers/truncate";
import { Name } from '@/components/core/actor/Name';
import { MediumLink } from '@/components/core/medium/link';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.subject} /> shared a <MediumLink media={story.object}>note</MediumLink></>
}

export function Body({story}) {
    return (
        <Text>
            <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
        </Text>
    )
}