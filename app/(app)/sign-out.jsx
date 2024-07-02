import { Pressable, View } from "react-native";
import { useSession } from "../../contexts/auth";
import { Button, ButtonText} from '@/components/ui/button'
import { getSession } from "../../api/people";

export default function signOut() {
    const { signOut } = useSession();

    const logSession = async () => {
        const result = await getSession();
        console.log(result, 'log session');
    }

    return (
        <View style={{flex: 1}}>
            <Button onPress={signOut}><ButtonText>Sign Out</ButtonText></Button>

            <Button onPress={logSession}><ButtonText>Log Session</ButtonText></Button>
        </View>
    )
}