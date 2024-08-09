import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen 
                name="[noteId]/index" 
            />
            <Stack.Screen
                name="edit" 
                options={{matcher: ({params}) => console.log(params, 'matcher.params') }}
            />
        </Stack>
    )
}