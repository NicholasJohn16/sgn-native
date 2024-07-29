import { Name } from "@/components/ui/actor/Name";
import { MediumLink } from "@/components/ui/medium/link";
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