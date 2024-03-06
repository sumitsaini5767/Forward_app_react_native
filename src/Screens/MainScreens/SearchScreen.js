import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ThemeBtn from "../../Components/ThemeBtn";
import { moderateScale, scale, verticalScale } from "../../Styles/scaling";
import Colors from "../../Styles/Colors";
import Size from "../../Styles/Size";
import Heading from "../../Components/Heading";
import LocationItem from "../../Components/LocationItem";

export default function SearchScreen(props) {
  const [data, setData] = useState([
    { val: "Sector 16, Chandigarh" },
    { val: "Sector 32, Chandigarh" },
    { val: "Sector 36, Chandigarh" },
    { val: "Sector 47, Chandigarh" },
    { val: "Sector 70, Chandigarh" },
  ]);

  function checkVaidation() {
    props.navigation.navigate("LoginScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter location manually"
          style={styles.input}
          placeholderTextColor={Colors.PlaceholderColor}
          txet
        />
        <Text style={styles.Suggetions}>Suggestions</Text>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <LocationItem title={item.val} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(100) }}
        />
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
  input: {
    borderRadius: moderateScale(8),
    height: verticalScale(48),
    backgroundColor: Colors.themeColorSecondary,
    paddingHorizontal: scale(16),
    color: Colors.titleColor,
  },
  Suggetions: {
    fontSize: Size.BtnFontSize,
    marginVertical: verticalScale(20),
    color: Colors.titleColor,
    fontWeight: "600",
  },
  seperator: {
    height: verticalScale(24),
  },
  list: {
    height: verticalScale(100),
  },
});
