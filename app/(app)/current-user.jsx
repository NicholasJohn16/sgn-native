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

export default function currentUser() {
    const { currentUser } = useSession();

    const [ width, breakpoint ] = useDimensions();
  
    console.log(width, 'width');
    console.log(breakpoint, 'breakpoint');

    const logUser = () => {
        console.log(currentUser);
    }

    const BannerImage = () => {
        const size = width > 768 ? 'large' : 'medium';
        // const height = dimensions.window.width > 768 ? 200 : 180;
        return <Image 
            source={{uri: currentUser.coverURL[size].url}} 
            style={{height: 180, width: '100%', position: 'absolute'}}
        />
    }

    return (
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

        {/* <Text><Truncate readMore={true}>{currentUser.body}</Truncate></Text> */}

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor libero et interdum ullamcorper. Suspendisse a dignissim mi. Nam non sapien vel tortor scelerisque suscipit ac ut ante. Mauris mauris massa, pulvinar nec erat a, eleifend lobortis nunc. Quisque tristique placerat ante sit amet feugiat. Quisque dapibus malesuada nisl. Vestibulum interdum eget lacus in cursus. Morbi ornare ac nisl at elementum. Curabitur nec nunc in augue ultricies egestas. Donec tristique accumsan consectetur. Sed vitae sapien commodo, volutpat velit vel, elementum diam. Donec vel egestas sapien. Suspendisse mattis leo erat, in ultrices libero molestie quis.</Text>

        <Text>Curabitur facilisis auctor est, non tincidunt tortor viverra ut. Cras posuere magna vitae bibendum ultricies. Maecenas vehicula pretium gravida. Vivamus at urna mi. Aliquam eleifend nunc ut auctor venenatis. Sed molestie ligula nulla, pellentesque varius risus ornare in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Curabitur imperdiet nec tortor et feugiat. Cras posuere sem sed vestibulum placerat. Praesent nec sodales metus. Nulla tincidunt eros odio, vel venenatis arcu maximus a.</Text>

        <Text>Nam pretium lobortis est, eget pulvinar mi sagittis sit amet. Sed at risus dapibus, facilisis odio vel, accumsan arcu. Fusce nec nisi accumsan nibh scelerisque tempus vitae convallis nulla. In rutrum sollicitudin malesuada. Vestibulum vehicula nulla a justo accumsan euismod. Nulla convallis lacinia eros, vitae dapibus velit tincidunt vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras bibendum in nibh eu sollicitudin.</Text>

        <Text>Praesent eget leo ac felis imperdiet auctor quis nec sapien. Morbi malesuada ex vitae ex scelerisque mollis. Vestibulum vestibulum tellus mi, et fringilla sapien iaculis imperdiet. Vivamus non dui pulvinar, sodales tellus ac, eleifend eros. Proin vehicula dui ut tempor hendrerit. Nulla facilisi. Curabitur quis sapien erat. Donec venenatis in lorem laoreet iaculis. Curabitur nec viverra est, et lobortis dolor. Aliquam quam lectus, mattis sed nisi a, gravida gravida risus. Curabitur tristique, arcu sit amet sodales ultrices, nisi velit volutpat mi, quis vulputate risus nisl vitae nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse malesuada accumsan neque. Aliquam erat volutpat. Duis dignissim felis quis posuere dictum.</Text>

        <Text>Vivamus sit amet faucibus lacus. Praesent sagittis egestas magna sed convallis. Nunc nulla enim, elementum ac diam sed, commodo venenatis nibh. Aenean non mauris maximus ligula pretium iaculis. Duis orci tellus, volutpat quis tristique consectetur, sollicitudin ut justo. Mauris tincidunt suscipit venenatis. Phasellus feugiat mauris non arcu placerat, vel tincidunt quam pellentesque. Donec consectetur sollicitudin blandit. Cras pharetra ante quis tortor accumsan, vel congue lorem ultrices. Donec non lorem urna. Mauris ullamcorper elit sit amet sollicitudin bibendum. Suspendisse fermentum neque vel justo interdum maximus. Donec nec egestas elit. Vivamus eu purus euismod, tempus metus id, viverra nisl. Nam auctor velit massa, sed sollicitudin ipsum ultrices sed. </Text>

        </ParallaxScrollView>
    )
}