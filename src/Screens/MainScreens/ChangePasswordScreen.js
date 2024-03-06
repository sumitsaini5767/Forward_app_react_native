import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemeBtn from "../../Components/ThemeBtn";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import Heading from "../../Components/Heading";
import InputField from "../../Components/InputField";
import BackBtn from "../../Components/BackBtn";

export default function ChangePasswordScreen(props) {
  const [show, setshow] = useState(true);
  const [showc, setshowc] = useState(true);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  function checkVaidation() {
    props.navigation.navigate("ProfileScreen");
  }

  function changeNavigation() {
    props.navigation.navigate("ProfileScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.HeadingContainer}>
          <BackBtn onPress={changeNavigation} />
          <Text style={styles.heading}>Change Password</Text>
        </View>
        <View style={styles.PasswordContainer}>
          <InputField
            textValue={password}
            placeholder={"Password"}
            change={setPassword}
            showPassword={show}
          />
          <TouchableOpacity
            onPress={() => setshow(!show)}
            style={styles.showbtn}
          >
            {show ? (
              <Text style={styles.showtxt}>Show</Text>
            ) : (
              <Text style={styles.showtxt}>Hide</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.PasswordContainer}>
          <InputField
            textValue={cpassword}
            placeholder={"Confirm password"}
            change={setCPassword}
            showPassword={showc}
          />
          <TouchableOpacity
            onPress={() => setshowc(!showc)}
            style={styles.showbtn}
          >
            {showc ? (
              <Text style={styles.showtxt}>Show</Text>
            ) : (
              <Text style={styles.showtxt}>Hide</Text>
            )}
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.KeyboardAvoid}
        >
          <View style={styles.btnContainer}>
            <ThemeBtn
              title={"SAVE"}
              height={verticalScale(48)}
              onPress={checkVaidation}
            />
          </View>
        </KeyboardAvoidingView>
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
  HeadingContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(20),
    // alignItems: "center",
  },

  PasswordContainer: {
    marginBottom: verticalScale(16),
  },
  showbtn: {
    position: "absolute",
    height: moderateScale(48),
    justifyContent: "center",
    right: moderateScale(16),
  },
  showtxt: {
    color: Colors.titleColor,
    opacity: 0.5,
  },
  heading: {
    marginLeft: moderateScale(16),
    top: -5,
    color: Colors.titleColor,
    fontWeight: "600",
    fontSize: scale(16),
  },

  //keyboard avoid

  KeyboardAvoid: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
