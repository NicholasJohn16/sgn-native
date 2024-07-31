import { Name } from "@/components/core/actor/Name";
import { MediumLink } from "@/components/core/medium/link";
import { Truncate } from '@/components/helpers/truncate';
import { Text } from "react-native";

export function Title({story}) {
    return <><Name actor={story.subject}/> posted a <MediumLink media={story.object}>blog</MediumLink></>
}

export function Body({story}) {
    return (
        <Text>
            <Truncate>{story.object.body}</Truncate>
        </Text>
    )
}