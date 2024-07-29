import { Name } from "@/components/ui/actor/Name";
import { MediumLink } from "@/components/ui/medium/link";
import { Heading } from '@/components/ui/heading';
import { Truncate } from '@/components/helpers/truncate';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.object} /> started a <MediumLink media={story.object}>topic</MediumLink></>
}

export function Body({story}) {
    return (
        <>
            <MediumLink media={story.object}><Heading>{story.object.name}</Heading></MediumLink>
            <Text><Truncate readMore={true}>{story.object.body}</Truncate></Text>
        </>
    )
}