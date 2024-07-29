import { View, Text, FlatList, TouchableHighlight } from "react-native"
import { getLeaderStories } from "@/api/stories";
import { StoryLoader } from "@/components/ui/story/loader";
import { InfiniteScroll } from "../../components/InfintieScroll";
import { Skeletons, SkeletonBase } from "@/components/ui/story/Skeleton";
import { Composer } from '@/components/ui/Composer';

export default function Dashboard() {
    const getStories = async (params) => {
        console.log(params, 'getStories.params');
        const response = await getLeaderStories({start: params.pageParam});
        return response.data;
    }

    // const storyQuery = useInfiniteQuery({
    //     queryKey: ['stories', { filter: 'leaders' }],
    //     queryFn: getStories,
    //     initialPageParam: 0,
    //     getNextPageParam: (lastPage, allPages, lastPageParam) => {
    //         return lastPageParam + 20;
    //     }
    // });

    // console.log(storyQuery, 'storyQuery');

    // if(storyQuery.isLoading) return <Text>Loading...</Text>

    // if(storyQuery.isError) return <Text>{JSON.stringify(storyQuery.error)}</Text>

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

    // const getRecentStories = () => {
    //     setRefreshing(true);
    //     getLeaderStories().then((result) => {
    //         setStories(result.data);
    //         setPagination(result.pagination);
    //         setRefreshing(false);
    //         console.log(stories);
    //     });
    // }

    // useEffect(() => {
    //     getRecentStories();
    // }, []);

    // const getMoreStories = () => {
    //     console.log(pagination);
    //     getLeaderStories(pagination.offset + pagination.limit, pagination.limit)
    //         .then((result) => {
    //             setStories(stories => [...stories, ...result.data]);
    //             console.log(stories, 'stories after update');
    //             setPagination(result.pagination);
    //     });
    // }

//     console.log(storyQuery.data, 'story data');

//     return (
//         <View style={{flex: 1}} className="pt-4">
//             <FlatList
//                 data={storyQuery.data.pages.flatMap(n => n)}
//                 renderItem={({item, index, separators}) => (<StoryLoader story={item} key={item.id} index={index} />)}
//                 className="px-4"
//                 onEndReached={storyQuery.fetchNextPage}
//                 onEndReachedThreshold={0.3}
//                 // onRefresh={getRecentStories}
//                 // refreshing={storyQuery.isRefetching}
//                 ListFooterComponent={storyQuery.isFetchingNextPage ? <Spinner space="lg" className="my-5" /> : null}
//             />
//         </View>
//     )
}