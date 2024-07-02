import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import Constants from 'expo-constants';
import { useSession } from '../contexts/auth';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button, ButtonText} from '@/components/ui/button'
import { router } from "expo-router";
// import { useToast, Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';
import { useToast } from "../contexts/toast";
import { VStack } from '@/components/ui/vstack';
import { Loading } from "../components/Loading";

export default function signIn() {
    const {signIn, signOut, getSession, currentUser, isLoading} = useSession();
    const [data, setData] = useState({username: "NicholasJohn16", password: '1G3z!$bbXrGq*N4T'});
    const [error, setError] = useState(false);
    // const toast = useToast();
    const sendToast = useToast();

    const tryToSignIn = async () => {
        console.log(data, 'data');
        const currentUser = await signIn(data.username, data.password);
        console.log(currentUser, 'currentUser');
        if(currentUser) {
            console.log(currentUser, 'result in trying to sign in');
            router.replace('/');
        } else {
            sendToast({
                title: 'Login Failed',
                description: [
                    'Please check your username and password.',
                    'If the error persists, please contact us for assistance.'].join('\n')
            });
        }
    }

    const logSession = async () => {
        const result = await getSession();

        console.log(result, 'getSession.result');
    }

    const testToast = () => {
        sendToast({
            title: 'Test Toast',
            description: "This is a test, only a test."
        })
    }

    if(isLoading) {
        return <Loading />
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
                    aria-labelledBy='username'
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
                    aria-labelledBy='password'
                    aria-errormessage='password'
                    />
            </View>

            <Button className="rounded bg-sky-700" onPress={tryToSignIn}><ButtonText>Sign In</ButtonText></Button>

            <Button onPress={logSession}><ButtonText>Log Session</ButtonText></Button>

            <Pressable onPress={signOut}><Text>Sign Out</Text></Pressable>

            <Button onPress={testToast}><ButtonText>Test Toast</ButtonText></Button>

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