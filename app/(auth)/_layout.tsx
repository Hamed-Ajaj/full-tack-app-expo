import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          headerShown: false,
        }}
      />
      <StatusBar backgroundColor="#161622" style="light" />
    </Stack>
  );
};

export default AuthLayout;
