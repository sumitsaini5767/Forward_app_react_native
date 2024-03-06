import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/MainScreens/HomeScreen";
import SearchScreen from "../Screens/MainScreens/SearchScreen";
import NotificationScreen from "../Screens/MainScreens/NotificationScreen";
import ProfileScreen from "../Screens/MainScreens/ProfileScreen";
import AddPostScreen from "../Screens/MainScreens/AddPostScreen";
import { moderateScale, verticalScale } from "../Styles/scaling";
import Colors from "../Styles/Colors";
import { Image } from "react-native";
import ImagePath from "../Constants/ImagePath";
import EditProfile from "../Screens/MainScreens/EditProfile";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  const option = (image) => {
    return {
      tabBarIcon: ({ focused }) => {
        return (
          <Image
            tintColor={focused ? Colors.btnColor : Colors.titleColor}
            source={image}
          />
        );
      },
    };
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: verticalScale(60),
          position: "absolute",
          borderTopLeftRadius: moderateScale(8),
          borderTopRightRadius: moderateScale(8),
          backgroundColor: Colors.themeColorSecondary,
          paddingBottom: verticalScale(10),
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        options={option(ImagePath.HomeIcon)}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={option(ImagePath.SearchIcon)}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        options={option(ImagePath.AddIcon)}
        name="AddPostScreen"
        component={AddPostScreen}
      />
      <Tab.Screen
        options={option(ImagePath.NotifyIcon)}
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={option(ImagePath.ProfileIcon)}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
