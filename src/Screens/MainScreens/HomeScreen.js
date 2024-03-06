import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ImagePath from "../../Constants/ImagePath";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import PostComponent from "../AuthScreens/PostComponent";

export default function HomeScreen(props) {
  const [data, setData] = useState([
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon",
      address: "Sector 28D, Chandigarh",
      locationImg: ImagePath.LocationImg,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      uploadTime: "1 hr ago",
      comments: "1,245",
      likes: "44,686",
    },
    {
      profileImg: ImagePath.profileImg2,
      name: "Lelia Walker",
      address: "Sector 28B, Chandigarh",
      locationImg: ImagePath.LocationImg2,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      uploadTime: "1 hr ago",
      comments: "1,245",
      likes: "55,686",
    },
    {
      profileImg: ImagePath.profileImg,
      name: "Russell Gordon",
      address: "Sector 28D, Chandigarh",
      locationImg: ImagePath.LocationImg,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      uploadTime: "1 hr ago",
      comments: "1,245",
      likes: "44,686",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.HeadingContainer}>
        <Image source={ImagePath.LogoImg} style={styles.LogoStyles} />
        <TouchableOpacity>
          <Image
            source={ImagePath.LocationIcon}
            style={styles.LocationIconStyle}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={({ item }) => <PostComponent item={item} props={props} />}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
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
  HeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LogoStyles: {
    height: verticalScale(24),
    width: moderateScale(25),
    tintColor: Colors.btnColor,
    marginLeft: moderateScale(1),
  },
  flatlist: {
    marginTop: verticalScale(24),
  },
  seperator: {
    height: verticalScale(24),
  },
  contentContainer: {
    paddingBottom: verticalScale(35),
  },
});
