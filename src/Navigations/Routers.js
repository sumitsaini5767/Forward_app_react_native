import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();
export default function Routers() {
  const auth = useSelector((state) => state.DataSlice.isMainTrue);
  console.log(auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
