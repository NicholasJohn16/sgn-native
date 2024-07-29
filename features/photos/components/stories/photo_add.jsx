import { Name } from "@/components/ui/actor/Name";
import { MediumLink } from "@/components/ui/medium/link";
import { Photo, Photos } from './photo';

export function Title({story}) {
    const multiplePhotos = Object.hasOwn(story, 'objects');

    return <><Name actor={story.subject} /> shared {multiplePhotos ? 'new photos' : <MediumLink media={story.object}>photo</MediumLink>}</>
}

export function Body({story}) {
    const multiplePhotos = Object.hasOwn(story, 'objects');

    return (
        <>{multiplePhotos ? <Photos photos={story.objects} /> : <Photo photo={story.object} />}</>
    )
}