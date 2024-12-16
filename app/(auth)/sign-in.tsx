import { View, Text, ScrollView, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import SafeAreaContainer from "@/components/SafeAreaContainer";
import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import { loginUser } from "@/lib/appwrite";
const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    
    try {
      setSubmitting(true);
      if(!email || !password){
        Alert.alert("Error","Please fill all fields")
        return;
      }
      const user = await loginUser(email, password);

      router.replace("/home");
    } catch (error:any) {
      Alert.alert("Error", error.message);
    }
    finally {
      setSubmitting(false);
    }
  }

  return (
    <SafeAreaContainer>
      <ScrollView>
        <View className="w-full px-4 py-10  my-6 min-h-[85vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white font-psemibold text-[30px] text-start mt-10">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            placeholder="example@gmail.com"
            value={email}
            handleChangeText={(e) => setEmail(e)}
          />
          <FormField
            title="Password"
            placeholder="********"
            value={password}
            handleChangeText={(e) => setPassword(e)}
          />
          <View className="mt-6 w-full ">
            <Link
              href="/forgot-password"
              className="text-lg font-pregular  text-gray-100 mt-2"
            >
              <Text className="text-right">Forgot Password?</Text>
            </Link>
          </View>
          <CustomButton
            desc="Log In"
            customStyles="w-full mt-6"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />
          <Text className="text-gray-100 font-pregular text-[14px] mt-7 text-center">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </Text>
        </View>
        <StatusBar backgroundColor={"#161622"} style="light" />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default SignInScreen;
