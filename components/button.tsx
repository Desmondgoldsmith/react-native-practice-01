import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles: string;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  handlePress,
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
      <Text className="text-lg font-psemibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
