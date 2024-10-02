import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon } from 'native-base';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 0, // ios only
          overflow: "hidden",
          height: 72,
          width:"100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
      >
      <Tabs.Screen
        name="(menu)"
        options={{
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Icon as={MaterialIcons} name='home' size={'3xl'} color={focused?"pimary.boxbutton":"primary.placeholderColor"}/>
          ),
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <Icon as={MaterialIcons} name='person' size={'3xl'} color={focused?"pimary.boxbutton":"primary.placeholderColor"}/>
          ),
        }}
      />
      
    </Tabs>
  );
}
