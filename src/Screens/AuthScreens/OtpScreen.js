import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import ThemeBtn from "../../Components/ThemeBtn";
import Heading from "../../Components/Heading";
import BackBtn from "../../Components/BackBtn";

export default function OtpScreen(props) {
  function checkVaidation() {
    props.navigation.navigate("SetPasswordScreen");
  }
  function changeNavigation() {
    props.navigation.navigate("SignUpScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <BackBtn onPress={changeNavigation} />
        <View style={styles.HeadingContainer}>
          <Heading
            title={"Enter the 4-digit code sent to you at 875 364 8947"}
            // para={"We are happy to see. You can login to continue."}
          />
        </View>
        <Text style={styles.HeadingPara}>Edit my mobile number</Text>
        <OtpInput
          numberOfDigits={4}
          focusColor="grey"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: styles.containerOtp,
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.KeyboardAvoid}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.resendCode}>Resend code in 0:14</Text>
            <ThemeBtn
              title={"VERIFY"}
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
    // marginBottom: verticalScale(20),
  },
  HeadingPara: {
    marginTop: verticalScale(-23),
    color: Colors.LinkColor,
    marginBottom: verticalScale(30),
  },
  containerOtp: {
    // justifyContent: "flex-start",
  },
  inputsContainer: {
    justifyContent: "flex-start",
    // backgroundColor: Colors.themeColorSecondary,
  },
  pinCodeContainer: {
    backgroundColor: Colors.themeColorSecondary,
    borderWidth: 0,
    marginRight: moderateScale(16),
    height: verticalScale(48),
    width: moderateScale(40),
  },
  pinCodeText: {
    fontSize: Size.BtnFontSize,
    color: Colors.titleColor,
  },
  activePinCodeContainer: {
    borderWidth: 1,
    borderColor: Colors.ParaColor,
  },

  resendCode: {
    color: Colors.titleColor,
    marginBottom: verticalScale(23),
  },

  KeyboardAvoid: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
