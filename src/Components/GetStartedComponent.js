import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Styles/Colors";
import ImagePath from "../Constants/ImagePath";
import { moderateScale, scale, verticalScale, width } from "../Styles/scaling";
import Size from "../Styles/Size";

export default function GetStartedComponent() {
  return (
    <View style={styles.container}>
      <Image source={ImagePath.LoadingScreenImg} style={styles.ImgStyles} />
      <Text style={styles.heading}>Hendrerit vulputate sem</Text>
      <Text style={styles.para}>
        Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam
        aenean.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: "100%",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: moderateScale(328),
    paddingHorizontal: moderateScale(30),
    borderRadius: scale(16),
    backgroundColor: Colors.themeColorSecondary,
    paddingVertical: verticalScale(70),
    marginLeft: moderateScale(8),
  },
  ImgStyles: {
    resizeMode: "contain",
    height: verticalScale(245),
    width: moderateScale(267),
  },
  heading: {
    marginTop: verticalScale(70),
    fontSize: Size.TitleFontSize,
    fontWeight: Size.titleFontWeight,
    color: Colors.titleColor,
    marginBottom: verticalScale(8),
    lineHeight: verticalScale(32),
  },
  para: {
    lineHeight: verticalScale(19),
    textAlign: "center",
    color: Colors.ParaColor,
  },
});
