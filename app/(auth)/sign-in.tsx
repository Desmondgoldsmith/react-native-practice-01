import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { images } from "../../constants";
import Form from "../../components/formField";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
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
          {/* email */}
          <Form
            title="Email"
            value={formData.email}
            handleChangeText={(event) =>
              setFormData({ ...formData, email: event })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* password */}
          <Form
            title="Password"
            value={formData.passwword}
            handleChangeText={(event) =>
              setFormData({ ...formData, password: event })
            }
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
