import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "react-native";
import { images } from "../constants";
import Button from "../components/button";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center  h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-white text-center font-bold text-3xl">
              Discover endless possibilities with{" "}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[130px] absolute h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center font-pregular text-sm text-gray-200 mt-7">
            Where cretivity meets exploration: Embark on a journey of timeless
            exploration with Aora.{" "}
          </Text>

          <Button
            title="continue with email"
            handlePress={() => {}}
            containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
