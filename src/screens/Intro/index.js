import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Appearance,
  AppState,
} from "react-native";
import images from "../../assets/images";
import { useColorScheme } from "react-native-appearance";

export default function Intro({ navigation }) {
  const colorScheme = useColorScheme();
  React.useEffect(() => {
    (function () {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 3000);
    })();
  }, []);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "light" ? "#fff" : "#000" },
      ]}
    >
      <Image source={images.logoIntro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightBg: {
    backgroundColor: "#fff",
  },
  darkBg: {
    backgroundColor: "#000",
  },
  introText: {
    color: "#FFC900",
    fontSize: 45,
  },
});
