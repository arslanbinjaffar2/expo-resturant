// RootLayout.js
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { ThemeProvider } from '@/components/theme/theme-provider';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent splash screen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load the fonts using useFonts hook
  const [loaded, error] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.ttf'),
    'Poppins-SemiBoldItalic': require('@/assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-BlackItalic': require('@/assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-ExtraBoldItalic': require('@/assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraLightItalic': require('@/assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Italic': require('@/assets/fonts/Poppins-Italic.ttf'),
    'Poppins-LightItalic': require('@/assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-MediumItalic': require('@/assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-ThinItalic': require('@/assets/fonts/Poppins-ThinItalic.ttf'),
  });

  useEffect(() => {
    // Hide the splash screen when fonts are loaded or if there is an error
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Display nothing until fonts are fully loaded or error occurs
  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
