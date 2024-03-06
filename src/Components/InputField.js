import { View, Text, TextInput, StyleSheet } from "react-native";
import Size from "../Styles/Size";
import Colors from "../Styles/Colors";

export default function InputField(props) {
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.inputstyle}
        value={props.textValue}
        placeholder={props.placeholder}
        onChangeText={props.change}
        secureTextEntry={props.showPassword}
        placeholderTextColor={Colors.PlaceholderColor}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: Size.inputHeight,
    paddingHorizontal: Size.inputFieldPadding,
    backgroundColor: Colors.themeColorSecondary,
    borderRadius: Size.inputFieldBorderRadius,
  },
  inputstyle: {
    height: Size.inputHeight,
    color: Colors.titleColor,
  },
});
