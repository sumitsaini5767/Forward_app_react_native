import React from "react";
import DrawerNav from "./DrawerNav";
import OtherScreen from "../Screens/OtherScreens/OtherScreen";

export default function MainStack(Stack) {
  return (
    <>
      <DrawerNav />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
    </>
  );
}
