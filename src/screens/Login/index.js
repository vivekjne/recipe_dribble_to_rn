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
import { colors, metrics, fonts } from "../../themes";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <View style={{ position: "relative" }}>
        <TextInput
          placeholder="Passsword"
          style={[styles.input, { paddingRight: 35 }]}
          secureTextEntry
        />
        <Image
          source={images.lockIcon}
          style={{ position: "absolute", right: 15, top: 16 }}
        />
      </View>
      <Button title="Login" onPress={() => alert("pressed")} />

      <View style={styles.smallTextContainer}>
        <Text style={styles.smallText}>Don't have an account?</Text>
        <Text style={[styles.smallText, { color: "#FFC900" }]}>Sign Up</Text>
      </View>

      <Text style={styles.orText}>OR</Text>
      <Button
        buttonStyles={styles.socialButton}
        textStyles={styles.socialText}
        icon
        title="Login with Facebook"
        iconSrc={images.fbLogo}
        onPress={() => alert("pressed")}
      />

      <View style={styles.spacer}></View>
      <Button
        buttonStyles={styles.socialButton}
        textStyles={styles.socialText}
        icon
        title="Login with Google"
        iconSrc={images.googleLogo}
        onPress={() => alert("pressed")}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  loginText: {
    fontSize: 38,
    color: "#000",
    marginBottom: metrics.spacing(4),
    fontFamily: fonts.poppinsRegular,
    // fontWeight: "bold",
  },
  input: {
    backgroundColor: colors.lightGray,
    color: "#5D5D5D",
    marginBottom: metrics.spacing(4),
    height: metrics.spacing(12),
    paddingHorizontal: 25,
  },

  smallTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
