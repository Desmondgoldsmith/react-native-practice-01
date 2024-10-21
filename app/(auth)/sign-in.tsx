import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { images } from "../../constants";
import Form from "../../components/formField";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 py-6 w-full justify-center h-full">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="font-psemibold text-white mt-10 text-2xl text-semibold">
            Log in to Aora
          </Text>

          <Form />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
