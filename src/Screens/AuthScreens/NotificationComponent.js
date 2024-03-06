import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";

export default function NotificationComponent({ item }) {
  return (
    <TouchableOpacity>
      <View style={styles.NotificationContainer}>
        <Image style={styles.profileImg} source={item.profileImg} />
        <View style={styles.TxtContainer}>
          <Text style={styles.Name}>
            {item.name} <Text style={styles.post}>{item.details}</Text>
          </Text>
          <Text style={styles.Time}>{item.uploadTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.titleColor,
    fontSize: scale(16),
    fontWeight: "600",
    marginBottom: verticalScale(34),
  },
  NotificationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImg: {
    // tintColor: "white",
    height: verticalScale(40),
    width: moderateScale(40),
    // marginRight: moderateScale(10),
    resizeMode: "contain",
  },
  TxtContainer: {
    marginLeft: moderateScale(16),
  },
  Name: {
    // marginTop: verticalScale(4),
    color: Colors.btnColor,
    fontSize: scale(16),
    fontWeight: "500",
  },
  post: {
    color: Colors.titleColor,
  },
  Time: {
    marginTop: verticalScale(4),
    color: Colors.ParaColor,
  },
});
