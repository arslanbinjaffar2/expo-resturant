import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown:false }}>
        <Stack.Screen name="index" options={{ headerShown: false,contentStyle:{backgroundColor:"#fff"} }} />
        <Stack.Screen name="menu-details/[id]" options={{ headerShown: false,contentStyle:{backgroundColor:"#fff"} }} />
      </Stack>
  );
}
