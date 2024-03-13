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
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function DeviceLocationSreen(props) {
  const [data, setData] = useState([
    { val: "Sector 16, Chandigarh" },
    { val: "Sector 32, Chandigarh" },
    { val: "Sector 36, Chandigarh" },
    { val: "Sector 47, Chandigarh" },
    { val: "Sector 70, Chandigarh" },
    { val: "Sector 16, Chandigarh" },
    { val: "Sector 32, Chandigarh" },
    { val: "Sector 36, Chandigarh" },
    { val: "Sector 47, Chandigarh" },
    { val: "Sector 70, Chandigarh" },
    { val: "Sector 16, Chandigarh" },
    { val: "Sector 32, Chandigarh" },
    { val: "Sector 36, Chandigarh" },
    { val: "Sector 47, Chandigarh" },
    { val: "Sector 70, Chandigarh" },
    { val: "Sector 16, Chandigarh" },
    { val: "Sector 32, Chandigarh" },
    { val: "Sector 36, Chandigarh" },
    { val: "Sector 47, Chandigarh" },
    { val: "Sector 70, Chandigarh" },
  ]);

  console.log(`userData is: ${JSON.stringify(props.route.params)}`);

  function checkVaidation() {
    //submit data to the database
    setDoc(doc(db, "users", props.route.params.mobile), props.route.params)
      .then(() => {
        alert("Signup Successfully");
        //navigation to login page after successful submition
        props.navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.HeadingContainer}>
            <Heading
              title={"Device location is off"}
              para={
                "Turning on device location will ensure accurate road alerts."
              }
            />
          </View>
          <View style={styles.TurnONbtnContainer}>
            <TouchableOpacity style={styles.turnonBtn}>
              <Text style={styles.turnonBtnTxt}>TURN ON</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.orTxt}>or</Text>

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
            <LocationItem title={item.val} image={true} />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.btnContainer}>
          <ThemeBtn
            title={"SELECT AND PROCEED"}
            height={verticalScale(48)}
            onPress={checkVaidation}
          />
        </View>
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
    width: "70%",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  TurnONbtnContainer: {
    // position: "absolute",
    height: "100%",
    width: "25%",
  },
  turnonBtn: {
    borderRadius: moderateScale(8),
    height: verticalScale(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.btnColor,
  },
  turnonBtnTxt: {
    fontSize: scale(12),
    color: Colors.titleColor,
    fontWeight: "bold",
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
  },
  orTxt: {
    textAlign: "center",
    color: Colors.titleColor,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(26),
    fontSize: scale(16),
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
    height: verticalScale(200),
  },
});
