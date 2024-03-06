import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ImagePath from "../Constants/ImagePath";
import Colors from "../Styles/Colors";
import Size from "../Styles/Size";

export default function LocationItem({ title, image }) {
  const [tick, settick] = useState(false);
  function handleTick() {
    settick(!tick);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {image && (
        <TouchableOpacity onPress={handleTick}>
          <Image
            source={tick ? ImagePath.BlueTickIcon : ImagePath.GreyTickIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: Size.BtnFontSize,
    color: Colors.PlaceholderColor,
  },
});
