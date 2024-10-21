import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-600">
      <Text className="text-3xl text-yellow-300 font-pblack">Hello World</Text>
      <Link href={"/home"} className="color-blue-500 hover:underline">
        go to Profile page
      </Link>
    </View>
  );
};

export default Index;
