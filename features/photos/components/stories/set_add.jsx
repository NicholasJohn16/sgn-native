import { Name } from "@/components/core/actor/Name";
import { MediumLink } from "@/components/core/medium/link";
import { Heading } from '@/components/ui/heading';

export function Title({story}) {
    return <><Name actor={story.subject} /> created a <MediumLink media={story.object}>photo set</MediumLink></>
}

export function Body({story}) {
    return (
        <MediumLink media={story.object}>
            <Heading>{story.object.name}</Heading>
        </MediumLink>
    )

}