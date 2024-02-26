import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routers from "./src/Navigations/Routers";
import HomeScreen from "./src/Screens/MainScreens/HomeScreen";

export default function App() {
  return <Routers />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
