import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mt-6">
      <Text className="text-[16px] text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full flex h-16  flex-row relative">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#7B7B8B"}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={title === "Email" ? "email-address" : "default"}
          className="w-full text-white border-2 border-black-200 h-[60px] bg-black-100  placeholder:text-[16px] p-[16px] mt-2 focus:border-secondary  rounded-lg"
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 absolute top-8 right-4"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
{
}

export default FormField;
