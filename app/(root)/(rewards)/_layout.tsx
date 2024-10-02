import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown:false,contentStyle:{backgroundColor:"#fff"} }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="claimed" options={{ headerShown: false }} />
      </Stack>
  );
}
