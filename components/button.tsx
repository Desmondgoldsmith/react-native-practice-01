import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({
  text,
  handelPress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary max-h-[62px] justify-center items-center rounded-md ${containerStyles}`}
    >
      <Text className="text-lg font-psemibold">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
