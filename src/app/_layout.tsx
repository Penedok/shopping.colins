import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import * as Notifications from "../components/notifications"





import { useColorScheme } from '../hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 7000,
  fade: true,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard/index" options={{ headerShown: false }} />
      <Stack.Screen name="Shopping/index" options={{ headerShown: false }} />
      <Stack.Screen name="Profile/index" options={{ headerShown: false }} />
      <Stack.Screen name="Navbar/index" options={{ headerShown: false }} />
    </Stack>

  );
}
