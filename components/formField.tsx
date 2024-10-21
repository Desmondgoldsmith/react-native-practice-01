import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import { Image } from "react-native";
import { icons } from "../constants";

interface FormProps {
  title: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  value: string;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
}

const Form: React.FC<FormProps> = ({
  title,
  placeholder,
  handleChangeText,
  value,
  otherStyles,
  keyboardType = "default",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles || ""}`}>
      <Text className="font-psemibold text-base text-gray-100">{title}</Text>

      <View className="rounded-md bg-black-100 border border-black-200 w-full h-16 focus:border-secondary flex-row items-center px-4">
        <TextInput
          className="flex-1 text-white font-pregular text-base"
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Form;
