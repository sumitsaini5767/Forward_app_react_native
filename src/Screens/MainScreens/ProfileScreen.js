import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import { change } from "../../Redux/DataSlice";
import { toggleAuth } from "../../Redux/Action";

export default function ProfileScreen(props) {
  function navigateTO(screen) {
    props.navigation.navigate(screen);
  }
  function logOutHandle() {
    toggleAuth();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity onPress={() => navigateTO("EditProfile")}>
        <View style={styles.editProfileContainer}>
          <Image style={styles.Icon} source={ImagePath.EditProfileIcon} />
          <Text style={styles.txt}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTO("ChangePasswordScreen")}>
        <View style={styles.editProfileContainer}>
          <Image style={styles.Icon} source={ImagePath.KeyIcon} />
          <Text style={styles.txt}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={logOutHandle()}>
        <View style={styles.editProfileContainer}>
          <Image style={styles.Icon} source={ImagePath.LogoutIcon} />
          <Text style={styles.txt}>Signout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    paddingHorizontal: Size.ContainerPaddingHorizontal,
    paddingBottom: verticalScale(31),
    paddingTop: verticalScale(45),
  },
  title: {
    color: Colors.titleColor,
    fontSize: scale(16),
    fontWeight: "600",
    marginBottom: verticalScale(34),
  },
  editProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(25),
  },
  txt: {
    color: Colors.titleColor,
    fontSize: scale(15),
    marginLeft: moderateScale(20),
  },
  Icon: {
    height: verticalScale(20),
    width: moderateScale(20),
    resizeMode: "contain",
  },
});
