import { Name } from "@/components/core/actor/Name";
import { Names } from "@/components/core/actor/Names";

export function namesHelper(story) {
    const multipleSubjects = Object.hasOwn(story, 'subjects');

    return multipleSubjects ? (
        <Names actors={story.subjects} />
    ) : (
        <Name actor={story.subject} />
    )
}