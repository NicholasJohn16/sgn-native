import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { SessionProvider } from "../contexts/auth";
import { ToastProvider } from '../contexts/toast';
import { Platform } from 'react-native';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Constants from "expo-constants";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../assets/global.css";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EventProvider } from 'react-native-outside-press';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// https://stackoverflow.com/questions/77966470/expo-react-native-nati-base-project-tailwindnative-build-failed
// import "../node_modules/.cache/nativewind/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function AppLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const queryClient = new QueryClient();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <SessionProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <EventProvider>
                  {Platform.OS === 'web' && <ReactQueryDevtools /> }
                  <Slot/>
                </EventProvider>
              </GestureHandlerRootView>
            </ThemeProvider>
          </SessionProvider>
        </ToastProvider>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}

let RootLayout = AppLayout;

if(Constants.expoConfig.extra.storybookEnabled === 'true') {
  RootLayout = require('../.storybook').default;
}

export default RootLayout;