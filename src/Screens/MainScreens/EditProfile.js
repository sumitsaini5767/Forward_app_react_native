import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemeBtn from "../../Components/ThemeBtn";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import Heading from "../../Components/Heading";
import ImagePath from "../../Constants/ImagePath";
import InputField from "../../Components/InputField";
import BackBtn from "../../Components/BackBtn";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function EditProfile(props) {
  function changeNavigation() {
    props.navigation.navigate("ProfileScreen");
  }

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.avoidView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.HeadingContainer}>
            <BackBtn onPress={changeNavigation} />
            <Text style={styles.heading}>Edit Profile</Text>
          </View>
          <View style={styles.ProfileImgContainer}>
            <TouchableOpacity>
              <Image style={styles.prfImg} source={ImagePath.profileImg} />
              <Image style={styles.editIcon} source={ImagePath.EditIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.NameConatiner}>
            <View style={styles.firstnameContainer}>
              <InputField
                placeholder={"First name"}
                textValue={firstName}
                change={setfirstName}
              />
            </View>
            <View style={styles.lastnameContainer}>
              <InputField
                placeholder={"Last name"}
                textValue={lastName}
                change={setlastName}
              />
            </View>
          </View>
          <View style={styles.emailContainer}>
            <InputField
              placeholder={"Email"}
              textValue={email}
              change={setEmail}
            />
          </View>
          <View style={styles.mobileContiner}>
            <View style={styles.FlagContainer}>
              <View style={styles.falgImageContainer}>
                <Image source={ImagePath.FlagImg} style={styles.FlagImgStyle} />
                <Text style={styles.flagNumber}>+1</Text>
                <Image source={ImagePath.DownIcon} />
              </View>
              <InputField />
            </View>
            <View style={styles.NumberInputContainer}>
              <InputField
                placeholder={"Mobile number"}
                textValue={mobile}
                change={setmobile}
              />
            </View>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={styles.KeyboardAvoid}
          >
            <View style={styles.btnContainer}>
              <ThemeBtn
                title={"NEXT"}
                height={verticalScale(48)}
                onPress={changeNavigation}
              />
            </View>
          </KeyboardAvoidingView>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
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

  avoidView: {
    flex: 1,
    height: "100%",
  },

  NameConatiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  firstnameContainer: {
    width: "47%",
  },
  lastnameContainer: {
    width: "47%",
  },

  emailContainer: {
    marginTop: verticalScale(16),
  },

  mobileContiner: {
    marginTop: verticalScale(16),

    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  FlagContainer: {
    justifyContent: "center",
    width: "30%",
  },
  falgImageContainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  FlagImgStyle: {
    marginRight: moderateScale(8),
    // marginLeft: moderateScale(8),
  },
  flagNumber: {
    color: Colors.PlaceholderColor,
    marginRight: moderateScale(8),
  },
  NumberInputContainer: {
    width: "64%",
  },

  KeyboardAvoid: {
    flex: 1,
    height: verticalScale(240),
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  HeadingContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(20),
    // alignItems: "center",
  },
  heading: {
    marginLeft: moderateScale(16),
    top: -5,
    color: Colors.titleColor,
    fontWeight: "600",
    fontSize: scale(16),
  },
  ProfileImgContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: verticalScale(8),
    marginBottom: verticalScale(50),
    flexDirection: "row",
    alignItems: "flex-end",
  },
  prfImg: {
    height: verticalScale(100),
    width: verticalScale(100),
  },
  editIcon: {
    position: "absolute",
    alignSelf: "center",
    right: moderateScale(16),
    bottom: verticalScale(0),
  },
});
