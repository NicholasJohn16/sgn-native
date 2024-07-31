import { View, Text, FlatList, TouchableHighlight } from "react-native"
import { getLeaderStories } from "@/api/stories";
import { StoryLoader } from "@/components/core/story/loader";
import { InfiniteScroll } from "@/components/core/InfintieScroll";
import { Skeletons, SkeletonBase } from "@/components/core/story/Skeleton";
import { Composer } from '@/components/core/Composer';

export default function Dashboard() {
    const getStories = async (params) => {
        console.log(params, 'getStories.params');
        const response = await getLeaderStories({start: params.pageParam});
        return response.data;
    }

    return (
        <>
        {/* <Composer /> */}
        {/* <View className="p-4">
            <SkeletonBase />
        </View> */}
        <InfiniteScroll 
            headerComponent={Composer}
            queryKey={['stories', { filter: 'leaders'}]}
            fetchItems={getStories}
            renderItem={({item}) => <StoryLoader story={item} key={item.id} />}
            skeleton={Skeletons}
            // renderItem={({item}) => <Text>{item.id}</Text>}
            />
        </>
    )
}