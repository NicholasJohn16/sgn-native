import { View, Text, FlatList } from "react-native"
import { useInfiniteQuery } from "@tanstack/react-query";
import { Spinner } from '@/components/ui/spinner';

export function InfiniteScroll({queryKey, fetchItems, renderItem, skeleton, headerComponent}) {

    // const getItems = async (params) => {
    //     console.log(params, 'is.params');
    //     const response = await fetchItems(params);
    //     console.log(response, 'is.response');
    //     return response.data;
    // }

    const query = useInfiniteQuery({
        queryKey,
        queryFn: fetchItems,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            return lastPageParam + 20;
        }
    });

    console.log(query.data, 'query.data');
    const flattenedData = query.data?.pages.flatMap(n => n) || [];
    // const flattenedData = [];
    console.log(flattenedData, 'flattenedData');

    return (
        <View style={{flex: 1}} className="pt-4">
            <FlatList
                data={flattenedData}
                renderItem={renderItem}
                className="px-4 space-y-4 flex"
                onEndReached={query.fetchNextPage}
                // onEndReachedThreshold={0.3}
                ListFooterComponent={query.isFetchingNextPage || true ? <Spinner size="large" className="my-5" /> : null}
                ListEmptyComponent={skeleton ? skeleton : null}
                ListHeaderComponent={headerComponent ? headerComponent : null}
                // refreshing={query.isRefetching}
                // onRefresh={query.refetch()}
            />
        </View>
    )
}