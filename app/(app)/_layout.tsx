import { Redirect } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '@/contexts/auth';
import { Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Loading } from '../../components/Loading';

export default function AppLayout() {
  const { currentUser, isLoading } = useSession();
  const colorScheme = useColorScheme();

  if(isLoading) {
    return <Loading />
  }

  if(!currentUser) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({focused, color, size}) => {
            return <Text>💖</Text>
          },
          title: 'Welcome!'
        }}
      />
      <Drawer.Screen 
        name="explore"
        options={{
          drawerLabel: "Explore",
          title: "Explore"
        }}
      />
      <Drawer.Screen
        name="sign-out"
        options={{
          drawerLabel: 'Sign Out',
          title: 'Sign Out'
        }}
      />
      <Drawer.Screen 
        name="current-user"
        options={{
          drawerLabel: `${currentUser.username}'s profile`,
          title: currentUser.username
        }}
      />
    </Drawer>
  );
}
