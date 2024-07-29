import { useLocalSearchParams } from "expo-router";
import { Text } from 'react-native';

export default function Page() {
    const { userId } = useLocalSearchParams();

    return ( 
        <Text>{userId}</Text>
    )
}