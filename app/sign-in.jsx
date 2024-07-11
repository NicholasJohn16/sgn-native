import { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import Constants from 'expo-constants';
import { useSession } from '../contexts/auth';
import { Input, InputSlot, InputField } from '../components/ui/input';
import { Button, ButtonText} from '@/components/ui/button'
import { router } from "expo-router";
import { useToast } from "../contexts/toast";
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Loading } from "../components/Loading";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Heading } from '@/components/ui/heading';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Link } from "expo-router";
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';

export default function signIn() {
    const {signIn, isLoading} = useSession();
    const [data, setData] = useState({username: "NicholasJohn16", password: '1G3z!$bbXrGq*N4T'});
    const [showPassword, setShowPassword] = useState(false);
    const sendToast = useToast();

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    }

    const tryToSignIn = async () => {
        const currentUser = await signIn(data.username, data.password);

        if(currentUser) {
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

    if(isLoading) {
        return <Loading />
    }

    return (
        <View 
            style={styles.container} 
            className="p-4 flex-1 w-full sm:items-center sm:justify-center "
        >
            <View className="min-w-min w-full sm:w-1/2 md:w-1/3 lg:w-3/12 sm:border sm:p-4 sm:rounded sm:shadow native:mt-7">

                <View className="mb-7">
                    <Heading size="2xl">Log in</Heading>
                    <Text>Welcome back to SGN</Text>
                </View>

                <VStack spacing="xl">
                    <FormControl id="username-fieldgroup" className="mb-3">
                        <FormControlLabel className="mb-1" htmlFor="username" role="label">
                            <FormControlLabelText>Username or E-mail</FormControlLabelText>
                        </FormControlLabel>
                        <Input >
                            <InputField 
                                nativeID="username"
                                placeholder="MarshaPJohnson1969"
                                onChangeText={t => setData({...data, username: t})}
                                // aria-labelledBy='username'
                                // aria-errormessage='username'
                                autoComplete="off"
                                autoCapitalize="none"
                                // autoCorrect=""
                                aria-label="Username or E-mail"
                                value={data.username}
                                />
                        </Input>
                    </FormControl>

                    <FormControl nativeID="password-formgroup" className="mb-3">
                        <FormControlLabel htmlFor="password" role="label" className="mb-1">
                            <FormControlLabelText>Password</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField 
                                nativeID="password"
                                placeholder="••••••••••••"
                                onChangeText={t => setData({...data, password: t})} 
                                aria-labelledBy='password'
                                aria-errormessage='password'
                                className="grow"
                                type={showPassword ? 'text' : 'password'}
                                value={data.password}
                                autoCapitalize="none"
                                />
                            <InputSlot onPress={toggleShowPassword} className="pr-3">
                                <Ionicons size={22} className="leading-8" name={showPassword ? 'eye-outline' : 'eye-off-outline'} />
                            </InputSlot>
                        </Input>
                    </FormControl>
                </VStack>

                <HStack className="mb-5" reversed={true}>
                    <Link href="/reset-password">
                        <Text className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600 underline">Forgot Password?</Text>
                    </Link>
                </HStack>

                <Button size="md" className="rounded bg-sky-700" onPress={tryToSignIn}><ButtonText>Sign In</ButtonText></Button>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10
    }
})