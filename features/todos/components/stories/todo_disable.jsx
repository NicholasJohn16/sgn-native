import { Name } from "@/components/core/actor/Name";
import { MediumLink } from "@/components/core/medium/link";
import { Task, Tasks } from "./tasks";
import { HStack } from '@/components/ui/hstack';

export function Title({story}) {
    const tasks = Object.hasOwn(story, 'objects') ? "following to-dos" : <MediumLink media={story.object}>to-do</MediumLink>;

    return <><Name actor={story.subject} /> closed the {tasks}</>
}

export function Body({story}) {
    const hasMultiple = Object.hasOwn(story, 'objects');

    return (
        <HStack>
            {!hasMultiple && <Task task={story.object} />}
            {hasMultiple && <Tasks tasks={story.objects} />}
        </HStack>
    )
}