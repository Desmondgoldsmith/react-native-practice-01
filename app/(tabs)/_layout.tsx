import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

interface TabIconProps {
  name: string;
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, icon, color, focused }) => (
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      className="w-6 h-6"
      style={{ tintColor: color }}
      resizeMode="contain"
    />
    <Text
      className={`text-xs ${
        focused ? "font-psemibold" : "font-pregular"
      } text-xs`}
      style={{ color }}
    >
      {name}
    </Text>
  </View>
);

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      {/* bookmark screen */}
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown: false,
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name={"Bookmark"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Profile"
              icon={icons.profile}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
