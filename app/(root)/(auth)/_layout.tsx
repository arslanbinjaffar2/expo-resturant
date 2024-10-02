import 'react-native-reanimated';
import {  Stack } from 'expo-router'

export default function Layout() {

  return (
      <Stack screenOptions={{ headerShown:false,contentStyle:{backgroundColor:"#fff"} }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
  );
}
