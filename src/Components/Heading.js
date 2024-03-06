import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Size from "../Styles/Size";
import Colors from "../Styles/Colors";
import { verticalScale } from "../Styles/scaling";

export default function Heading({ title, para }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Head}>{title}</Text>
      <Text style={styles.para}>{para}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  Head: {
    fontSize: Size.TitleFontSize,
    color: Colors.titleColor,
    // height: verticalScale(35),
    marginBottom: verticalScale(5),
    fontWeight: "600",
  },
  para: {
    fontSize: Size.paraFontSize,
    color: Colors.ParaColor,
    // height: verticalScale(35),
    marginBottom: verticalScale(9),
  },
});
