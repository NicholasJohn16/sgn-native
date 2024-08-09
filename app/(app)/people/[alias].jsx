import { Text, Image, View } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';
import { SocialStats } from '@/components/core/actor/SocialStats';
import { Truncate } from "@/components/helpers/truncate";
import { useDimensions } from "@/hooks/useDimension";
import { getNotes } from '@/api/notes';
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getPerson } from "@/api/people";
import { Center } from "@/components/ui/center";
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar } from '@/components/core/actor/Avatar';

export default function currentUser() {
    const { alias } = useLocalSearchParams();

    const [ width, breakpoint ] = useDimensions();

    const { data: currentUser, ...query} = useQuery({
        queryKey: ['person', { alias }],
        queryFn: () => getPerson(alias)
    });

    if(query.isLoadingError || query.isError) {
        return (
            <Center className="h-full">
                <Text>Person Not Found</Text>
            </Center>
        )
    }

    if(query.isLoading) {
        return <Loading />
    }

    const BannerImage = () => {
        const size = width > 768 ? 'large' : 'medium';
        // const height = dimensions.window.width > 768 ? 200 : 180;
        if(!Object.hasOwn(currentUser.coverURL, size)) { return; }

        return <Image 
            source={{uri: currentUser.coverURL[size].url}} 
            style={{height: 180, width: '100%', position: 'absolute'}}
        />
    }

    const fetchNotes = async ({pageParam}) => {
        const response = await getNotes({start: pageParam, 'oid': currentUser.id});
        return response.data;
    }

    return (
        <>
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<BannerImage />}
            className="pt-0"
        >
            <HStack>
                <Avatar actor={currentUser} className="-mt-20 z-10" />
                {/* <Image 
                    source={{uri: currentUser.imageURL.medium.url}}
                    style={{...currentUser.imageURL.medium.size}}
                    className="rounded -mt-20 z-10"
                /> */}
                
                <HStack className="p-4 w-full justify-between items-center">
                    <View>
                      <Heading>{currentUser.givenName} {currentUser.familyName}</Heading>
                      <Text>@{currentUser.username}</Text>
                    </View>

                    <Button><ButtonText>Follow</ButtonText></Button>
                </HStack>
            </HStack>

        <SocialStats className="border" actor={currentUser} />

        <Text><Truncate readMore={true}>{currentUser.body}</Truncate></Text>

        </ParallaxScrollView>
        {/* <InfiniteScroll 
            queryKey={['notes', {oid: currentUser.id}]}
            fetchItems={fetchNotes}
            renderItem={({item}) => <Note className="mb-4" note={item} key={item.id} asChild />}
            skeleton={Skeletons}
        /> */}
        </>
    )
}

function Loading() {
    return (
        <>
            <Skeleton variant="sharp" className="h-[180px]" />
            <HStack>
                <Skeleton className="h-[160px] w-[160px] m-4 -mt-20 z-10 border border-white border-2"/>

                <VStack space="md" className="w-full mt-4">
                    <Skeleton className="h-6 w-2/6" />
                    <Skeleton className="h-4 w-2/6" />
                </VStack>

            </HStack>
        </>
    )
}