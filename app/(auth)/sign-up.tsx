import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { images } from "../../constants";
import Form from "../../components/formField";
import Button from "../../components/button";
import { Alert } from "react-native";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/Provider";

const SignUp: React.FC = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.username === ""
    ) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);

    try {
      const results = await createUser(
        formData.username,
        formData.email,
        formData.password
      );

      // set the data to state.
      setUser(results);
      setIsLogged(true);

      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 py-6 min-h-[85vh] justify-center ">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="font-psemibold text-white mt-10 text-2xl">
            Sign up to Aora
          </Text>

          <Form
            title="Username"
            placeholder="Enter your Username"
            value={formData.username}
            handleChangeText={(text: string) =>
              setFormData({ ...formData, username: text })
            }
            otherStyles="mt-7"
          />

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

          <Button
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7 p-2"
            textStyles=""
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-pregular">
              Have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-base font-psemibold text-secondary"
            >
              Sign-in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
