import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../Styles/scaling";
import ImagePath from "../Constants/ImagePath";

export default function BackBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={ImagePath.BackArrowIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: verticalScale(20),
    marginLeft: moderateScale(5),
  },
});
