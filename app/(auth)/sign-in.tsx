import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import SafeAreaContainer from "@/components/SafeAreaContainer";
import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
const SignInScreen = () => {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <View className="w-full px-4 py-10  my-6 min-h-[85vh]">
          <Image  source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
          <Text className="text-white font-psemibold text-[30px] text-start mt-10">
            Log In Into Aora
          </Text>
          {/* <View className="mt-8">
            <Text className="text-[16px] text-gray-100 font-pmedium">Username</Text>
            <TextInput placeholder="Your unique username" className="w-full text-white h-[60px] bg-black-100 placeholder:text-[#7B7B8B] placeholder:text-[16px] p-[16px] mt-2  rounded-lg"/>
          </View> */}
          <View className="mt-6">
            <Text className="text-[16px] text-gray-100 font-pmedium">Email</Text>
            <TextInput placeholder="example@gmail.com" className="w-full text-white h-[60px] bg-black-100 placeholder:text-[#7B7B8B] placeholder:text-[16px] p-[16px] mt-2  rounded-lg"/>
          </View>
          <View className="mt-6">
            <Text className="text-[16px] text-gray-100 font-pmedium">Password</Text>
            <TextInput placeholder="Enter a Password" textContentType="password" className="w-full text-white h-[60px] bg-black-100 placeholder:text-[#7B7B8B] placeholder:text-[16px] p-[16px] mt-2  rounded-lg"/>
          </View>
          <CustomButton desc="Log In" customStyles="w-full mt-6" />
          <Text className="text-gray-100 font-pregular text-[14px] mt-7 text-center">
            Don't have an account? <Link href={"/(auth)/sign-up"} className="text-secondary-100">SignUp</Link>
          </Text>
        </View>
        <StatusBar backgroundColor={"#161622"} style="light" />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default SignInScreen;
