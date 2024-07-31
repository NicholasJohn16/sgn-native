import { namesHelper } from '@/components/helpers/story';
import { MediumLink } from "@/components/core/medium/link";
import { Photo } from './photo';

export function Title({story}) {
    const names = namesHelper(story);

    return <>{names} commented on the <MediumLink media={story.subject}>photo</MediumLink></>
}

export function Body({story}) {
    return (
        <Photo photo={story.object} />
    ) 
}