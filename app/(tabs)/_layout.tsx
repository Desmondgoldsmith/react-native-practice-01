import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

// TypeScript interface for TabIcon props
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
      {/* Add other tab screens here */}
    </Tabs>
  );
};

export default TabLayout;
