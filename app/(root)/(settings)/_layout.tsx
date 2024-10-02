import { Stack } from 'expo-router';
import { NativeBaseProvider } from "native-base";
import 'react-native-reanimated';
import {theme} from '@/components/theme/theme-provider'

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown:false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
}
