import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import ImagePath from "../../Constants/ImagePath";
import NotificationComponent from "../AuthScreens/NotificationComponent";

export default function NotificationScreen() {
  const [data, setData] = useState([
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon ",
      details: "added a new post.",
      uploadTime: "23 min ago",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker ",
      details: "added a new post.",
      uploadTime: "32 min ago",
    },
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon ",
      details: "added a new post.",
      uploadTime: "23 min ago",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker ",
      details: "added a new post.",
      uploadTime: "32 min ago",
    },
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon ",
      details: "added a new post.",
      uploadTime: "23 min ago",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker ",
      details: "added a new post.",
      uploadTime: "32 min ago",
    },
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon ",
      details: "added a new post.",
      uploadTime: "23 min ago",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker ",
      details: "added a new post.",
      uploadTime: "32 min ago",
    },
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon ",
      details: "added a new post.",
      uploadTime: "23 min ago",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker ",
      details: "added a new post.",
      uploadTime: "32 min ago",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification</Text>
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={({ item }) => <NotificationComponent item={item} />}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <View style={styles.sepLine}></View>}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    paddingHorizontal: Size.ContainerPaddingHorizontal,
    paddingBottom: verticalScale(31),
    paddingTop: verticalScale(45),
  },
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
    marginTop: verticalScale(4),
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
  sepLine: {
    height: verticalScale(0.3),
    backgroundColor: Colors.ParaColor,
    width: "83%",
    alignSelf: "flex-end",
    marginVertical: verticalScale(20),
  },
  contentContainer: {
    paddingBottom: verticalScale(100),
  },
});
