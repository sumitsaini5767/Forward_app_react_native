import React from "react";
import EditProfile from "../Screens/MainScreens/EditProfile";
import TabNavigator from "./TabNavigator";
import ChangePasswordScreen from "../Screens/MainScreens/ChangePasswordScreen";
import PostDetailScreen from "../Screens/MainScreens/PostDetailScreen";
import AddImages from "../Screens/MainScreens/AddImages";

// const Stack = createNativeStackNavigator();
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      <Stack.Screen name="AddImages" component={AddImages} />
    </>
  );
}
