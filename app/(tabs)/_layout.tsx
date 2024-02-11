import { Tabs, usePathname, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Entypo, Fontisto, Octicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
const layout = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          height: 50,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="shop/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={24} color={color} />
          ),
          tabBarLabel: "Shop",
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={24} color={color} />
          ),
          tabBarLabel: "Cart",
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="favorite" size={24} color={color} />
          ),
          tabBarLabel: "Favorites",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="person-fill" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};
export default layout;
