import { Name } from "@/components/ui/actor/Name"

export function Title({story}) {
    return <><Name actor={story.subject} /> added <Name actor={story.object} /> as a follower to <Name actor={story.target} /></>
}