import { getNotes } from '@/api/notes';
import { List as Note } from '@/features/notes/components/list';
import { InfiniteScroll } from '@/components/InfintieScroll';
import { Skeletons } from '@/features/notes/components/Skeleton';

export default function Index() {

    const fetchNotes = async ({pageParam}) => {
        const response = await getNotes({start: pageParam});
        return response.data;
    }

    return (
        <InfiniteScroll 
            queryKey={['notes']}
            fetchItems={fetchNotes}
            renderItem={({item}) => <Note className="mb-4" note={item} key={item.id} asChild />}
            skeleton={Skeletons}
        />
    )
}