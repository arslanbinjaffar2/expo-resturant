import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
        <Stack.Screen name="(filters)" options={{ headerShown: false }} />
        <Stack.Screen name="(notifications)" options={{ headerShown: false }} />
        <Stack.Screen name="(settings)" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)" options={{ headerShown: false }} />
        <Stack.Screen name="(rewards)" options={{ headerShown: false }} />
        <Stack.Screen name="(favoruites)"  options={{ headerShown: false}} />
        <Stack.Screen name="(vouchers)"  options={{ headerShown: false}} />
        <Stack.Screen name="(feedback)"  options={{ headerShown: false}} />
        <Stack.Screen name="(contactus)"  options={{ headerShown: false}} />
        <Stack.Screen name="(termsandpolicies)"  options={{ headerShown: false}} />
      </Stack>
  );
}
