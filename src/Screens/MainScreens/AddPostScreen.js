import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, version } from "react";
import * as ImagePicker from "expo-image-picker";
import { verticalScale } from "../../Styles/scaling";
export default function AddPostScreen(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (image.length != 0) {
      props.navigation.navigate("AddImages", { image, setImage });
    }
  }, [image]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage([...image, result.assets[0].uri]);
    }
  };

  const clickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage([...image, result.assets[0].uri]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
      <Button title="click an image from camera" onPress={clickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  btn: {
    marginBottom: 56,
  },
});
