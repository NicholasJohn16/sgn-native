import { Name } from "@/components/core/actor/Name";
import { MediumLink } from "@/components/core/medium/link";
import { Truncate } from "@/components/helpers/truncate";
import { Heading } from '@/components/ui/heading';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.subject} /> posted a new <MediumLink media={story.object}>thread</MediumLink></>
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