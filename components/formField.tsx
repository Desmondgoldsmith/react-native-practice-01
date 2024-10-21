import { View, Text } from "react-native";
import React from "react";

interface FormProps {
  title: string;
  placeholder: string;
  handleChangeText: () => void;
  value: string;
  otherStyles: string;
}

const Form: React.FC<FormProps> = ({
  title,
  placeholder,
  handleChangeText,
  value,
  otherStyles,
  ...props
}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`font-psemibold text-base text-gray-100`}>{title}</Text>

      <View
        className={`rounded-md bg-black-100 border border-black-200 w-full h-16`}
      ></View>
    </View>
  );
};

export default Form;
