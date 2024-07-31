import { Name } from "@/components/core/actor/Name";
import { MediumLink } from "@/components/core/medium/link";
import { Heading } from "@/components/ui/heading";
import { Truncate } from '@/components/helpers/truncate';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.subject} /> added a <MediumLink media={story.object}>to-do</MediumLink></>
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