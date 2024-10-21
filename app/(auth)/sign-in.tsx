import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { images } from "../../constants";
import Form from "../../components/formField";

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="px-4 py-6 justify-center flex-1">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="font-psemibold text-white mt-10 text-2xl">
            Log in to Aora
          </Text>

          <Form
            title="Email"
            placeholder="Enter your email"
            value={formData.email}
            handleChangeText={(text: string) =>
              setFormData({ ...formData, email: text })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <Form
            title="Password"
            placeholder="Enter your password"
            value={formData.password}
            handleChangeText={(text: string) =>
              setFormData({ ...formData, password: text })
            }
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
