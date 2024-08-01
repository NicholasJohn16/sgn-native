import { useState, useEffect } from "react";
import { Text, Image, View, Pressable, Dimensions } from "react-native";
import { useSession } from "../../contexts/auth";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { Entypo } from '@expo/vector-icons';
import { SocialStats } from '@/components/ui/social-stats';
import { Truncate } from "../../components/helpers/truncate";
import { useDimensions } from "../../hooks/useDimension";

import { getNotes } from '@/api/notes';
import { List as Note } from '@/features/notes/components/List';
import { InfiniteScroll } from '@/components/core/InfiniteScroll';
import { Skeletons } from '@/features/notes/components/Skeleton';

export default function currentUser() {
    const { currentUser } = useSession();
    const [ width, breakpoint ] = useDimensions();

    const BannerImage = () => {
        const size = width > 768 ? 'large' : 'medium';
        // const height = dimensions.window.width > 768 ? 200 : 180;
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
                <Image 
                    source={{uri: currentUser.imageURL.medium.url}}
                    style={{...currentUser.imageURL.medium.size}}
                    className="rounded -mt-20 z-10"
                />
                
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