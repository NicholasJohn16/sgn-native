import { namesHelper } from '@/components/helpers/story';
import { MediumLink } from "@/components/ui/medium/link";
import { Heading } from '@/components/ui/heading';

export function Title({story}) {
    const names = namesHelper(story);
    return <>{names} comment on the <MediumLink media={story.object}>set</MediumLink></>
}

export function Body({story}) {
    return (
        <MediumLink media={story.object}>
            <Heading>{story.object.name}</Heading>
        </MediumLink>
    )
}