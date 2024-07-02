import { Text } from "react-native";
import { useSession } from "../../contexts/auth";
import { Image } from "react-native";

export default function currentUser() {
    const { currentUser } = useSession();

    return (
        <>
            <Image 
                source={{uri: currentUser.imageURL.large.url}} 
                style={currentUser.imageURL.large.size}
            />
            <Text>{currentUser.username}</Text>
            <Text>{currentUser.body}</Text>
        </>
    )
}