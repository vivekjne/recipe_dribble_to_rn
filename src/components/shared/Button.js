import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import { colors, fonts } from "../../themes";

export default function Button({
  onPress,
  buttonStyles,
  buttonText,
  color,
  title,
  textStyles,
  icon,
  iconSrc,
}) {
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  if (!buttonStyles) {
    buttonStyles = [];
  }
  return (
    <Touchable onPress={onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor: color || colors.primary },
          buttonStyles,
        ]}
      >
        {icon && <Image style={styles.icon} source={iconSrc} />}
        <Text style={[styles.buttonText, textStyles]}>{title}</Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    elevation: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontFamily: fonts.poppinsRegular,
  },
  icon: {
    position: "absolute",
    left: 25,
  },
});
