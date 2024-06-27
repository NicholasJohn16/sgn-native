import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Pressable } from "react-native";
import { Button as WebButton } from "react-native-web";
import Constants from 'expo-constants';
import { useSession } from '../../contexts/auth';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export default function login() {
    const {signIn, signOut, isLoading, currentUser} = useSession();
    const [data, setData] = useState({username: '', password: ''});

    const tryToSignIn = async () => {
        console.log(data, 'data');
        const result = await signIn(data.username, data.password);

        console.log(result, 'result');
    }

    const getSession = async () => {
        const result = await currentUser();

        console.log(result, 'getSession.result');
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <View className="mb-3">
                <Label nativeID="username" role="label">Username or E-mail Address</Label>
                <Input
                    style={styles.height}
                    placeholder="MarshaPJohnson1969"
                    onChangeText={t => setData({...data, username: t})}
                    aria-labelledbyledBy='username'
                    aria-errormessage='username'
                    />
            </View>

            <View className="mb-3">
                <Label nativeID="password">Password</Label>
                <Input 
                    style={styles.height}
                    secureTextEntry={true}
                    placeholder="**********"
                    onChangeText={t => setData({...data, password: t})} 
                    aria-labelledbyledBy='password'
                    aria-errormessage='password'
                    />
            </View>

            <Pressable className="rounded bg-sky-700" onPress={tryToSignIn}><Text>Sign In</Text></Pressable>

            <Pressable onPress={getSession}><Text>Get Session</Text></Pressable>

            <Pressable onPress={signOut}><Text>Sign Out</Text></Pressable>

        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: Constants.statusBarHeight + 10
    },
    textInput: {
        height: 40,
        padding: 10,
        margin: '1rem',
        borderWidth: 1
    }
})