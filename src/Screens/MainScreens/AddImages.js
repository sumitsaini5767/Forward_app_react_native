import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../../Styles/Colors";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import Size from "../../Styles/Size";
import BackBtn from "../../Components/BackBtn";
import ImagePath from "../../Constants/ImagePath";
import InputField from "../../Components/InputField";
import ThemeBtn from "../../Components/ThemeBtn";

export default function AddImages(props) {
  console.log(props.route.params);
  function goBack() {
    props.route.params.setImage([]);
    props.navigation.goBack();
  }
  function handlePost() {
    props.navigation.navigate("HomeScreen");
  }

  function addMoreImages() {
    props.navigation.navigate("AddPostScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.HeadingContainer}>
          <BackBtn onPress={goBack} />
          <Text style={styles.heading}>Add info</Text>
        </View>
        <View style={styles.imgContainer}>
          {props.route.params.image.map((item) => (
            <View style={styles.imgs}>
              <Image style={styles.img} source={{ uri: item }} />
            </View>
          ))}

          <TouchableOpacity
            style={styles.addIconContainer}
            onPress={addMoreImages}
          >
            <Image style={styles.addIcon} source={ImagePath.AddBlackIcon} />
          </TouchableOpacity>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={8}
          style={styles.Description}
          placeholder={"Write description here..."}
          placeholderTextColor={Colors.PlaceholderColor}
        />
        <View style={styles.Location}>
          <InputField placeholder={"Add location"} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={styles.KeyboardAvoid}
        >
          <View style={styles.btnContainer}>
            <ThemeBtn
              title={"POST"}
              height={verticalScale(48)}
              onPress={handlePost}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  },
  heading: {
    marginLeft: moderateScale(16),
    top: -5,
    color: Colors.titleColor,
    fontWeight: "600",
    fontSize: scale(16),
  },
  imgContainer: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgs: {
    // borderRadius: moderateScale(8),
    height: verticalScale(60),
    marginRight: moderateScale(15),
    marginBottom: moderateScale(10),
  },
  img: {
    borderRadius: moderateScale(8),
    height: "100%",
    width: moderateScale(65),
  },
  addIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(60),
    width: moderateScale(65),
    backgroundColor: Colors.themeColorSecondary,
    borderRadius: moderateScale(8),
  },
  addIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    tintColor: Colors.PlaceholderColor,
  },
  Description: {
    color: Colors.titleColor,
    backgroundColor: Colors.themeColorSecondary,
    height: verticalScale(96),
    width: "100%",
    borderRadius: moderateScale(8),
    paddingHorizontal: Size.inputFieldPadding,
    paddingVertical: Size.inputFieldPadding,
    marginTop: verticalScale(15),
    textAlignVertical: "top",
  },
  Location: {
    marginTop: verticalScale(15),
  },
  KeyboardAvoid: {
    flex: 1,
    height: verticalScale(240),
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
