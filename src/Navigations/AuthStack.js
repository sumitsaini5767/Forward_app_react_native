import React from "react";
import DeviceLocationSreen from "../Screens/AuthScreens/DeviceLocationSreen";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import OtpScreen from "../Screens/AuthScreens/OtpScreen";
import PreLoginScreen from "../Screens/AuthScreens/PreLoginScreen";
import SetPasswordScreen from "../Screens/AuthScreens/SetPasswordScreen";
import SignUpScreen from "../Screens/AuthScreens/SignUpScreen";
import GetStartedScreen from "../Screens/LoadingScreens/GetStartedScreen";
import LogoScreen from "../Screens/LoadingScreens/LogoScreen";

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name="LogoScreen" component={LogoScreen} />
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="PreLoginScreen" component={PreLoginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} />
      <Stack.Screen
        name="DeviceLocationSreen"
        component={DeviceLocationSreen}
      />
    </>
  );
}
