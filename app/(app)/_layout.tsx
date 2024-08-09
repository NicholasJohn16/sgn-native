import { Redirect } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '@/contexts/auth';
import { Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Loading } from '../../components/Loading';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { Avatar } from '@/components/core/actor/Avatar';

export const unstable_settings = {
  initialRouteName: 'dashboard'
}

export default function AppLayout() {
  const { currentUser, isLoading, signOut } = useSession();
  const dimensions = useWindowDimensions();
  const colorScheme = useColorScheme();

  if(isLoading) {
    return <Loading />
  }

  if(!currentUser) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Drawer
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerRight: () => (
          <Menu
            className="text-sky-500" 
            offset={5}
            trigger={({...triggerProps}) => {
              return (
                <Pressable {...triggerProps} >
                  <Avatar actor={currentUser} linked={false} className="mr-4" />
                </Pressable>
              )
            }}
            onOpen={() => {
              // console.log('opening');
              return true;
            }}
            
          >
            <MenuItem key="Profile" textValue="Profile">
              <MenuItemLabel className='hover:font-bold' size="xl">Profile</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Photos" textValue="Photos">
              <MenuItemLabel className='hover:font-bold' size="xl">Photos</MenuItemLabel>
            </MenuItem>
            <MenuItem onPress={signOut}>
              <MenuItemLabel size="xl">Sign Out</MenuItemLabel>
            </MenuItem>

          </Menu>
        )
      }}

    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({focused, color, size}) => {
            return <Text>💖</Text>
          }
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
        name="dashboard"
        options={{
          drawerLabel: 'Dashboard',
          title: 'Dashboard'
        }}
      />
      <Drawer.Screen 
        name="current-user"
        options={{
          drawerLabel: `${currentUser.username}'s profile`,
          title: currentUser.username
        }}
      />
      <Drawer.Screen
        name="notes"
        options={{
          drawerLabel: 'Notes',
          title: 'Notes'
        }}
      />
      <Drawer.Screen
        name="people/[alias]"
        options={{
          drawerLabel: 'Person',
          title: 'Person'
        }}
      />
    </Drawer>
  );
}
