import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Heading from "../../Components/Heading";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import InputField from "../../Components/InputField";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import ThemeBtn from "../../Components/ThemeBtn";
import BackBtn from "../../Components/BackBtn";
import { toggleAuth } from "../../Redux/Action";

export default function LoginScreen(props) {
  const [show, setshow] = useState(true);
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");

  function goBack() {
    props.navigation.navigate("PreLoginScreen");
  }

  function changeNavigation() {
    setPassword("");
    setmobile("");
    setshow(true);
    toggleAuth();
  }
  let error = [];
  let valid = [];

  function checkVaidation() {
    //mobile
    if (mobile.trim() == "") {
      error.push("Mobile number Required ❌");
    } else if (mobile.length !== 10) {
      error.push("Mobile number must be of 10 character ❌");
    } else if (!mobile.match(/^\d+$/)) {
      error.push("Mobile number can only contain numbers ❌");
    } else {
      valid.push("Mobile number ✅");
    }

    //password
    if (password.trim() == "") {
      error.push("Password Required ❌");
    } else if (
      !password.match(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
      )
    ) {
      error.push(
        "Password must contain 8 charater with atleast one(special character,uppercase,lowercase,number) ❌"
      );
    } else {
      valid.push("Password ✅");
    }

    if (error.length != 0) {
      let gap = "";
      if (valid.length != 0) {
        gap = "\n\n";
      }
      alert(`${valid.join("\n\n")}${gap}${error.join("\n\n")}`);
      error.length = 0;
    } else {
      //   alert(
      //     `Firstname: ${fName}\n\nLastname: ${lName}\n\nUsername: ${userName}\n\nEmail: ${email}`
      //   );
      alert(`Login Successfully ✅`);
      changeNavigation();
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <BackBtn onPress={goBack} />
        <View style={styles.HeadingContainer}>
          <Heading
            title={"Welcome back!"}
            para={"We are happy to see. You can login to continue."}
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
        <View style={styles.shortTxtContainer}>
          <View style={styles.OtpConatiner}>
            <Text style={styles.Otp}>Use OTP</Text>
          </View>
          <View style={styles.ForgotPasswordConatiner}>
            <Text style={styles.ForgotPassword}>Forgot password?</Text>
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.KeyboardAvoid}
        >
          <View style={styles.btnContainer}>
            <ThemeBtn
              title={"Login"}
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
  mobileContiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  FlagContainer: {
    justifyContent: "center",
    width: "30%",
  },
  NumberInputContainer: {
    width: "64%",
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
  PasswordContainer: {
    marginTop: verticalScale(16),
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
  shortTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateScale(26),
    width: "100%",
  },
  Otp: {
    color: Colors.titleColor,
  },
  ForgotPassword: {
    color: Colors.LinkColor,
  },
  KeyboardAvoid: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
