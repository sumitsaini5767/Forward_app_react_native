import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import GetStartedComponent from "../../Components/GetStartedComponent";
import { moderateScale, verticalScale } from "../../Styles/scaling";
import Colors from "../../Styles/Colors";

export default function GetStartedScreen(props) {
  const [values, setValues] = useState(0);

  let width = Dimensions.get("window").width;
  const onScrollHandle = (event) => {
    var currentOffset = event.nativeEvent.contentOffset.x;
    setValues(Math.ceil(currentOffset / width));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => onScrollHandle(e)}

        // onScrollEndDrag={(e) => onScrollHandle(e)}
      >
        <GetStartedComponent />
        <GetStartedComponent />
        <GetStartedComponent />
      </ScrollView>

      <View style={styles.bottomView}>
        <View style={styles.NavDots}>
          <View style={values === 0 ? styles.NavDot2 : styles.NavDot1}></View>
          <View style={values === 1 ? styles.NavDot2 : styles.NavDot1}></View>
          <View style={values === 2 ? styles.NavDot2 : styles.NavDot1}></View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("PreLoginScreen")}
        >
          <Text style={styles.BottomText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    justifyContent: "center",
    alignItems: "center",
    // paddingLeft: moderateScale(24),
    paddingTop: verticalScale(55),
    paddingBottom: verticalScale(39),
  },
  scrollview: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  bottomView: {
    height: verticalScale(32),
    marginTop: verticalScale(24),
    flexDirection: "row",
    alignItems: "center",
    width: moderateScale(320),
    justifyContent: "space-between",
  },
  NavDots: {
    flexDirection: "row",
    // width: moderateScale(80),
    height: verticalScale(4),
  },
  NavDot1: {
    width: moderateScale(16),
    backgroundColor: Colors.themeColorSecondary,
    borderRadius: moderateScale(2),
    marginRight: moderateScale(8),
  },
  NavDot2: {
    width: moderateScale(32),
    backgroundColor: Colors.btnColor,
    borderRadius: moderateScale(2),
    marginRight: moderateScale(8),
  },
  BottomText: {
    color: Colors.titleColor,
    fontWeight: "500",
  },
  Content: {
    marginRight: moderateScale(8),
  },
});
