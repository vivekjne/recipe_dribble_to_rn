import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Image,
  View,
} from "react-native";
import images from "../../assets/images";
import Button from "../../components/shared/Button";
import { colors, metrics, fonts, commonStyles } from "../../themes";
import { useColorScheme } from "react-native-appearance";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Signup({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.container, commonStyles[`${colorScheme}Bg`]]}
    >
      <Text style={[styles.loginText, commonStyles[`${colorScheme}Text`]]}>
        Signup
      </Text>

      <TextInput
        placeholderTextColor={colorScheme === "light" ? "#777" : "#999"}
        placeholder="Username"
        keyboardType="default"
        style={[styles[`${colorScheme}Input`]]}
      />
      <TextInput
        placeholderTextColor={colorScheme === "light" ? "#777" : "#999"}
        placeholder="Email"
        keyboardType="email-address"
        style={[styles[`${colorScheme}Input`]]}
      />
      <View style={{ position: "relative" }}>
        <TextInput
          placeholderTextColor={colorScheme === "light" ? "#777" : "#999"}
          placeholder="Passsword"
          style={[styles[`${colorScheme}Input`], { paddingRight: 35 }]}
          secureTextEntry
        />
        <Image
          source={images.lockIcon}
          style={{ position: "absolute", right: 15, top: 16 }}
        />
      </View>
      <Button
        title="SIGN UP"
        color={colors.secondary}
        onPress={() => navigation.navigate("MainTab")}
      />

      <View style={styles.smallTextContainer}>
        <Text style={[styles.smallText, commonStyles[`${colorScheme}Text`]]}>
          Already have an account ?
        </Text>
        <TouchableWithoutFeedback
          onPress={() => NavigationPreloadManager.pop()}
        >
          <Text style={[styles.smallText, { color: "#FFC900" }]}> Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },

  loginText: {
    fontSize: 38,
    color: "#000",
    marginBottom: metrics.spacing(4),
    fontFamily: fonts.poppinsRegular,
    // fontWeight: "bold",
  },
  lightInput: {
    backgroundColor: colors.lightGray,
    color: "#5D5D5D",
    marginBottom: metrics.spacing(4),
    height: metrics.spacing(12),
    paddingHorizontal: 25,
  },
  darkInput: {
    backgroundColor: "#444",
    color: "#fff",
    marginBottom: metrics.spacing(4),
    height: metrics.spacing(12),
    paddingHorizontal: 25,
  },

  smallTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  smallText: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
    fontFamily: fonts.poppinsRegular,
  },
  orText: {
    textAlign: "center",
    marginVertical: metrics.spacing(4),
    fontFamily: fonts.poppinsRegular,
  },
  socialButton: {
    backgroundColor: "#fff",
    borderWidth: Platform.OS === "ios" ? 1 : StyleSheet.hairlineWidth,
    borderColor: "#DDDDDD",
  },
  socialText: {
    color: "#000",
  },
  spacer: {
    marginBottom: metrics.spacing(4),
  },
  icon: {
    position: "absolute",
    left: 25,
  },
});
