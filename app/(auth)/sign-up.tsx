import SafeAreaContainer from "@/components/SafeAreaContainer";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { createUser } from "@/lib/appwrite";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      if (!email || !password || !username) {
        Alert.alert("Error", "Please fill all fields");
      }
      const result = await createUser(email, password, username);


      router.replace("/home");
    } catch (error:any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
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
            Sign Up
          </Text>
          <FormField
            title="Username"
            placeholder="Your Unique Username"
            value={username}
            handleChangeText={(e) => setUsername(e)}
          />
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
          <CustomButton
            desc="Sign Up"
            customStyles="w-full mt-10"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />
          <Text className="text-gray-100 font-pregular text-[14px] mt-7 text-center">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Log In
            </Link>
          </Text>
        </View>
        <StatusBar backgroundColor={"#161622"} style="light" />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default SignUpScreen;
