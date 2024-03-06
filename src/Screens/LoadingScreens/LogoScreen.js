import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import Colors from "../../Styles/Colors";
import { moderateScale, verticalScale } from "../../Styles/scaling";

export default function LogoScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("GetStartedScreen");
    }, 3000);
  }, []);
  return (
    <View style={styles.Container}>
      <Image source={ImagePath.LogoImg} style={styles.Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.themeColor,
  },
  Logo: {
    tintColor: Colors.btnColor,
    height: verticalScale(150),
    width: moderateScale(166),
  },
});
