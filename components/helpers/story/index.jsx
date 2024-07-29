import { Name } from "@/components/ui/actor/Name";
import { Names } from "@/components/ui/actor/Names";

export function namesHelper(story) {
    const multipleSubjects = Object.hasOwn(story, 'subjects');

    return multipleSubjects ? (
        <Names actors={story.subjects} />
    ) : (
        <Name actor={story.subject} />
    )
}