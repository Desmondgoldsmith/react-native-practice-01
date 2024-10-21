import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { images } from "../constants";
import Button from "../components/button";
import { router, Redirect } from "expo-router";

const Index = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center  min-h-[85vh] px-4">
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
          {/* ts-ignore */}
          <Button
            title="continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={"w-full p-2 mt-7"}
            textStyles=""
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;
