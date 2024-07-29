import { Truncate } from "@/components/helpers/truncate";
import { Name } from '@/components/ui/actor/Name';
import { MediumLink } from '@/components/ui/medium/link';
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