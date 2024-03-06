import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import Heading from "../../Components/Heading";
import ThemeBtn from "../../Components/ThemeBtn";

export default function PostDetailScreen(item) {
  //   console.warn(props);
  function navigateTo() {
    item.navigation.navigate("HomeScreen");
  }
  return (
    <ImageBackground
      source={item.route.params.locationImg}
      style={styles.container}
    >
      <View style={styles.mainContainer}>
        <View style={styles.HeadingContainer}>
          <Image
            source={item.route.params.profileImg}
            style={styles.profileImg}
          />
          <View style={styles.HeadingTxt}>
            <Text style={styles.name}>{item.route.params.name}</Text>
            <Text style={styles.address}>{item.route.params.address}</Text>
          </View>
          <TouchableOpacity onPress={navigateTo}>
            <Image source={ImagePath.CrossIcon} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.BottomContainer}>
          <Text style={styles.details}>{item.route.params.details}</Text>
          <Text style={styles.uploadTime}>{item.route.params.uploadTime}</Text>
          <View style={styles.BtnContainer}>
            <ThemeBtn title={"VIEW MAP"} height={verticalScale(48)} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(32),
    paddingHorizontal: verticalScale(5),
    paddingBottom: verticalScale(31),
    // alignItems: "center",
    // justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    height: "100%",
  },
  name: {
    fontSize: scale(16),
    fontWeight: "600",
    color: Colors.titleColor,
  },
  address: {
    marginTop: verticalScale(1.5),
    fontSize: scale(13),
    color: Colors.ParaColor,
  },
  profileImg: {
    height: verticalScale(40),
    width: moderateScale(40),
    marginLeft: moderateScale(10),
    right: moderateScale(20),
    resizeMode: "contain",
  },
  HeadingContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: verticalScale(11),
  },
  HeadingTxt: {
    height: verticalScale(18),
    marginBottom: verticalScale(15),
    left: moderateScale(-45),
  },
  details: {
    // alignSelf: "flex-start",
    fontSize: scale(15),
    color: Colors.titleColor,
  },
  BottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: moderateScale(20),
  },
  uploadTime: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
    color: Colors.ParaColor,
  },
  BtnContainer: {
    marginTop: verticalScale(30),
    flexDirection: "row",
    height: verticalScale(18),
    alignItems: "center",
    marginBottom: verticalScale(20),
    // justifyContent: "space-between",
  },
});
