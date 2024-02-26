import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import React from "react";
import HomeScreen from "../Screens/MainScreens/HomeScreen";
import SettingScreen from "../Screens/MainScreens/SettingScreen";

export default function DrawerNav() {
  return (
    <>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </>
  );
}
