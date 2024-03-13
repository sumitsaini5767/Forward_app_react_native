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
import { moderateScale, verticalScale } from "../../Styles/scaling";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import Heading from "../../Components/Heading";
import InputField from "../../Components/InputField";
import BackBtn from "../../Components/BackBtn";

export default function SetPasswordScreen(props) {
  const [show, setshow] = useState(true);
  const [showc, setshowc] = useState(true);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const userData = { ...props.route.params, password: password };

  function checkVaidation() {
    props.navigation.navigate("DeviceLocationSreen", userData);
  }

  function changeNavigation() {
    props.navigation.navigate("OtpScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <BackBtn onPress={changeNavigation} />
        <View style={styles.HeadingContainer}>
          <Heading
            title={"Set password"}
            para={"Create secure and unique password."}
          />
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
              title={"GET STARTED"}
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
    marginBottom: verticalScale(20),
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

  //keyboard avoid

  KeyboardAvoid: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
