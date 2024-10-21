import { View, Text } from "react-native";
import React from "react";


const Form = ({ title, placeholder, handleChangeText value, otherStyles, ...props}) => {
  return (
    <View className="space-y-2">
      <Text className={`font-psemibold text-base text-gray-100`}>Form</Text>
    </View>
  );
};

export default Form;
