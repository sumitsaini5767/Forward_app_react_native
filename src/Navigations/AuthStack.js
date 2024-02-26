import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import SignUpScreen from "../Screens/AuthScreens/SignUpScreen";

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </>
  );
}
