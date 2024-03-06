import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import Size from "../../Styles/Size";
import ThemeBtn from "../../Components/ThemeBtn";
import LoginBtn from "../../Components/LoginBtn";

export default function PreLoginScreen(props) {
  function navigateto(Screen) {
    props.navigation.navigate(Screen);
  }
  return (
    <View style={styles.container}>
      <Image source={ImagePath.LogoImg} style={styles.Logo} />
      <Text style={styles.text}>
        By clicking “Log In”, you agree with our Terms. Learn how we process
        your data in our Privacy policy.
      </Text>
      <View style={styles.PhoneBtn}>
        <ThemeBtn
          title={"Log In with Phone number"}
          height={verticalScale(48)}
          onPress={() => navigateto("LoginScreen")}
        />
      </View>
      <Text style={styles.orTxt}>or</Text>
      <View style={styles.SocialBtn}>
        <LoginBtn title={"Log In with Google"} />
        <View style={styles.imageContainer}>
          <Image source={ImagePath.GoogleIcon} style={styles.GoogleIcon} />
        </View>
      </View>
      <View style={styles.SocialBtn}>
        <LoginBtn title={"Log In with Google"} />
        <View style={styles.imageContainer}>
          <Image source={ImagePath.FacebookIcon} style={styles.GoogleIcon} />
        </View>
      </View>
      <View style={styles.SocialBtn}>
        <LoginBtn title={"Log In with Google"} />
        <View style={styles.imageContainer}>
          <Image source={ImagePath.AppleIcon} style={styles.GoogleIcon} />
        </View>
      </View>
      <View style={styles.bottomTxtContainer}>
        <Text style={styles.NewTxt}>New here? </Text>
        <TouchableOpacity onPress={() => navigateto("SignUpScreen")}>
          <Text style={styles.SignupTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    // justifyContent: "center",
    alignItems: "center",
    padding: Size.ContainerPaddingHorizontal,
    paddingTop: verticalScale(60),
  },
  Logo: {
    resizeMode: "contain",
    tintColor: Colors.btnColor,
    height: verticalScale(178),
    width: moderateScale(121),
    marginBottom: verticalScale(35),
  },
  text: {
    marginBottom: verticalScale(24),
    textAlign: "center",
    color: Colors.ParaColor,
    lineHeight: verticalScale(20),
  },
  orTxt: {
    fontSize: Size.BtnFontSize,
    marginBottom: verticalScale(26),
    color: Colors.titleColor,
  },
  PhoneBtn: {
    // marginTop: verticalScale(35),
    width: "100%",
    marginBottom: verticalScale(26),
  },
  SocialBtn: {
    width: "100%",
    marginBottom: verticalScale(16),
  },
  GoogleIcon: {
    // position: "absolute",
  },
  bottomTxtContainer: {
    flexDirection: "row",
    // marginBottom: verticalScale(39),
  },
  NewTxt: {
    color: Colors.titleColor,
    fontWeight: "600",
    fontSize: Size.paraFontSize,
  },
  SignupTxt: {
    color: Colors.LinkColor,
    fontWeight: "600",
    fontSize: Size.paraFontSize,
  },
  imageContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
});
