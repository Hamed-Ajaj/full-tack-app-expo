import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
const SearchInput = ({
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}: {
    value: string;
    placeholder: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (

        <View className="w-full flex h-16  flex-row ">
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#cdcde0"}
                value={value}
                onChangeText={handleChangeText}
                className="w-full text-white  border-2 mt-2 border-black-200 h-[60px] bg-black-100 placeholder:font-pregular  placeholder:text-[16px] px-[16px] focus:border-secondary  rounded-lg"
            />
            <TouchableOpacity>
                <Image source={icons.search} className="w-6 h-6 top-[26px] right-12" resizeMode="contain" />
            </TouchableOpacity>
        </View>

    );
};
{
}

export default SearchInput;
