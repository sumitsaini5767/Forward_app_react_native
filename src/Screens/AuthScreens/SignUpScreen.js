import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemeBtn from "../../Components/ThemeBtn";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import Heading from "../../Components/Heading";
import ImagePath from "../../Constants/ImagePath";
import InputField from "../../Components/InputField";
import BackBtn from "../../Components/BackBtn";

export default function SignUpScreen(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");

  const userData = {
    fname: firstName,
    lname: lastName,
    email: email,
    mobile: mobile,
  };

  let error = [];
  let valid = [];
  function checkVaidation() {
    //firstname
    if (firstName.trim() == "") {
      error.push("Firstname Required ❌");
    } else if (firstName.length < 3) {
      error.push("Firstname must be of three character atleaset ❌");
    } else if (!firstName.match(/^[A-Za-z]+$/)) {
      error.push("Firstname must be alphabets ❌");
    } else {
      valid.push("Firstname ✅");
    }

    //Lastname
    if (lastName.trim() == "") {
      error.push("Lastname Required ❌");
    } else if (lastName.length < 3) {
      error.push("Lastname must be of three character atleaset ❌");
    } else if (!lastName.match(/^[A-Za-z]+$/)) {
      error.push("Lastname must be alphabets ❌");
    } else {
      valid.push("Lastname ✅");
    }

    //email
    if (email.trim() == "") {
      error.push("Email Required ❌");
    } else if (email.length < 5) {
      error.push("Email must be of five character atleaset ❌");
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      error.push("Email must be alphabets ❌");
    } else {
      valid.push("Email ✅");
    }

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

    if (error.length != 0) {
      let gap = "";
      if (valid.length != 0) {
        gap = "\n\n";
      }
      alert(`${valid.join("\n\n")}${gap}${error.join("\n\n")}`);
      error.length = 0;
    } else {
      // alert(
      //   `Firstname: ${fName}\n\nLastname: ${lName}\n\nUsername: ${userName}\n\nEmail: ${email}`
      // );
      alert(`Signup Successfully ✅`);
      props.navigation.navigate("OtpScreen", userData);
    }
  }
  function changeNavigation() {
    props.navigation.navigate("PreLoginScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <BackBtn onPress={changeNavigation} />
        <View style={styles.HeadingContainer}>
          <Heading
            title={"Create new account"}
            para={"Create an account so you can continue."}
          />
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
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  HeadingContainer: {
    marginBottom: verticalScale(20),
  },
});
