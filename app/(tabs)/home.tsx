import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import SafeAreaContainer from "@/components/SafeAreaContainer";
import { useGlobalContext } from "@/context/authContext";
import {images} from "../../constants"
const HomeScreen = () => {
  const { isLoading, user } = useGlobalContext();
  return (
    <SafeAreaContainer>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  items-center min-h-[85vh] py-10 px-4">
          <View className="w-full flex-row items-center justify-between gap-2">
            <View className="gap-3">
              <Text className="text-[14px] font-pmedium text-gray-100">
                Welcom Back
              </Text>
              <Text className="text-[24px] font-psemibold text-white">
                {user.username}
              </Text>
            </View>
            <View>
              <Image source={images.logoSmall} className="w-[35px]  h-[35px]" resizeMode="contain"/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
