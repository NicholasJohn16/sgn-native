import { getLeaderStories } from "@/api/stories";
import { StoryLoader } from "@/components/core/story/loader";
import { InfiniteScroll } from "@/components/core/InfiniteScroll";
import { Skeletons, SkeletonBase } from "@/components/core/story/Skeleton";
import { Composer } from '@/components/core/Composer';

export default function Index() {
    const getStories = async (params) => {
        const response = await getLeaderStories({start: params.pageParam});
        return response.data;
    }

    return (
        <InfiniteScroll 
            headerComponent={Composer}
            queryKey={['stories', { filter: 'leaders'}]}
            fetchItems={getStories}
            renderItem={({item}) => <StoryLoader story={item} key={item.id} />}
            skeleton={Skeletons}
        />
    )
}