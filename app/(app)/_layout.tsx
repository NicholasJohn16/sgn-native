import { Redirect, Link } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '@/contexts/auth';
import { Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Loading } from '../../components/Loading';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { Avatar } from '@/components/core/actor/Avatar';

// export const unstable_settings = {
//   initialRouteName: 'dashboard'
// }

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
            <MenuItem className='hover:font-bold' key="Profile" textValue="Profile">
              <Link href={`/people/${currentUser.alias}`} asChild>
                <MenuItemLabel className="w-full" size="lg">
                    Profile
                </MenuItemLabel>
              </Link>
            </MenuItem>
            <MenuItem className='hover:font-bold' key="notes" textValue="Notes">
              <Link href={`/notes/@/${currentUser.id}`} asChild>
                <MenuItemLabel className="w-full" size="lg">
                  Notes
                </MenuItemLabel>
              </Link>
            </MenuItem>
            {/* <MenuItem className='hover:font-bold' key="Photos" textValue="Photos">
              <MenuItemLabel size="lg">Photos</MenuItemLabel>
            </MenuItem> */}
            <MenuItem onPress={signOut}>
              <MenuItemLabel size="lg">Sign Out</MenuItemLabel>
            </MenuItem>

          </Menu>
        )
      }}

    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard"
          // drawerIcon: ({focused, color, size}) => {
          //   return <Text>💖</Text>
          // }
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
