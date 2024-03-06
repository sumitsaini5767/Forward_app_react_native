import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import Heading from "../../Components/Heading";

export default function PostComponent({ item, props }) {
  function navigateTo() {
    props.navigation.navigate("PostDetailScreen", item);
  }
  return (
    <View style={styles.container}>
      <View style={styles.HeadingContainer}>
        <Image source={item.profileImg} style={styles.profileImg} />
        <View style={styles.HeadingTxt}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <TouchableOpacity>
          <Image source={ImagePath.DotsIcon} style={styles.option} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigateTo}>
        <Image source={item.locationImg} style={styles.locationImgStyles} />
      </TouchableOpacity>
      <View style={styles.BottomContainer}>
        <Text style={styles.details}>{item.details}</Text>
        <Text style={styles.uploadTime}>{item.uploadTime}</Text>
        <View style={styles.linkesContainer}>
          <Text style={styles.comments}>Comments {item.comments}</Text>
          <Text style={styles.likes}>Likes {item.likes}</Text>
          <TouchableOpacity>
            <Image style={styles.share} source={ImagePath.DirectionIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.themeColorSecondary,
    height: verticalScale(465),
    borderRadius: moderateScale(8),
    paddingTop: verticalScale(10),
    paddingHorizontal: verticalScale(5),
    paddingBottom: verticalScale(15),
    alignItems: "center",
    // justifyContent: "center",
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
  option: {
    height: verticalScale(3),
    width: moderateScale(14),
    bottom: verticalScale(6.5),
    resizeMode: "contain",
  },
  locationImgStyles: {
    height: verticalScale(278),
    width: moderateScale(309),
    resizeMode: "cover",
  },
  details: {
    // alignSelf: "flex-start",
    fontSize: scale(15),
    color: Colors.titleColor,
  },
  BottomContainer: {
    marginTop: verticalScale(14),
    paddingHorizontal: moderateScale(10),
    alignSelf: "flex-start",
    width: "100%",
  },
  uploadTime: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
    color: Colors.ParaColor,
  },
  linkesContainer: {
    marginTop: verticalScale(15),
    flexDirection: "row",
    height: verticalScale(18),
    alignItems: "center",
    // justifyContent: "space-between",
  },
  comments: {
    fontSize: scale(15),
    color: Colors.titleColor,
  },
  likes: {
    fontSize: scale(15),
    color: Colors.titleColor,
    marginLeft: moderateScale(20),
  },
  share: {
    height: moderateScale(21),
    width: moderateScale(21),
    resizeMode: "contain",
    marginLeft: moderateScale(50),
    marginTop: verticalScale(7),
  },
});
