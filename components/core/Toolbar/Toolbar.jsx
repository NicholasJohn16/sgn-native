import { Large } from './Large';
import { Small } from './Small';

export function Toolbar({node, size="large", showTime=false, className}) {
    const Bar = size === "large" ? Large : Small;

    return (
        <Bar item={node} showTime={showTime} className={className} />
    )
}

