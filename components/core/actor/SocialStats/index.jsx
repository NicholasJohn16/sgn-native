import { HStack } from '@/components/ui/hstack';
import { Text, View } from 'react-native';
import { Divider } from '@/components/ui/divider';

export function SocialStats({ actor }) {
    return (
        <HStack className="justify-around w-full">
            <View>
                <SocialStatValue>{actor.leaderCount}</SocialStatValue>
                <SocialStatLabel>Following</SocialStatLabel>
            </View>
            <Divider orientation="vertical" />
            <View>
                <SocialStatValue>{actor.followerCount}</SocialStatValue>
                <SocialStatLabel>Followers</SocialStatLabel>
            </View>
            <Divider orientation="vertical" />
            <View>
                <SocialStatValue>{actor.mutualCount}</SocialStatValue>
                <SocialStatLabel>Mutual</SocialStatLabel>
            </View>
        </HStack>
    )
}

// function SocialStat({children}) {

// }

function SocialStatValue({children}) {
    return <Text className="text-center">{children}</Text>
}

function SocialStatLabel({children}) {
    return <Text className="font-bold">{children}</Text>
}