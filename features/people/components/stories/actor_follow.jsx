import { Name } from '@/components/core/actor/Name';

export function Title({story}) {
    return <><Name actor={story.subject}/> is following <Name actor={story.target} /></>
}