import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Styles/Colors";
import { moderateScale, verticalScale } from "../Styles/scaling";
import Size from "../Styles/Size";

export default function ThemeBtn({ title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // padding: verticalScale(14),
    height: verticalScale(48),
    backgroundColor: Colors.titleColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(8),
  },
  text: {
    // color: Colors.titleColor,
    fontWeight: Size.titleFontWeight,
    fontSize: Size.BtnFontSize,
  },
});
