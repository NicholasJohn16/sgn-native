import { Name } from '@/components/ui/actor/Name';
import { MediumLink } from '@/components/ui/medium/link'
import { Heading } from "@/components/ui/heading";
import { Truncate } from '@/components/helpers/truncate';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.subject} /> posted a reply to <MediumLink media={story.object}>{story.object.name}</MediumLink></>
}

export function Body({story}) {
    return (
        <>
            <Heading><MediumLink media={story.object}>{story.object.name}</MediumLink></Heading>
            <Text>
                <Truncate>{story.object.body}</Truncate>
            </Text>
        </>
    )
}