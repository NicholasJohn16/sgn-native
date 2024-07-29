import { Name } from '@/components/ui/actor/Name';

export function Title({story}) {
    return <><Name actor={story.subject}/> is following <Name actor={story.target} /></>
}