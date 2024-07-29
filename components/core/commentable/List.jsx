import { Small } from "./Small";
import { Large } from "./Large";
import { Box } from '@/components/ui/box';

const variants = {
    small: 'border-t pt-4',
    large: 'bg-background-0 rounded border'
};

export function List({comments, size = 'small'}) {

    const Comment = size === 'small' ? Small : Large;

    return (
        <Box className={`${variants[size]}`}>
            {comments.map(comment => (
                <Comment comment={comment} key={comment.id} />
            ))}
        </Box>
    )
}