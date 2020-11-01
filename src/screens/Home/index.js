import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Image,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import images from "../../assets/images";
import Button from "../../components/shared/Button";
import { colors, metrics, fonts, commonStyles } from "../../themes";
import { useColorScheme } from "react-native-appearance";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import SpecialCard from "../../components/SpecialCard";

export default function Home({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, commonStyles[`${colorScheme}Bg`]]}>
      <ScrollView
        nestedScrollEnabled
        style={commonStyles[`${colorScheme}Bg`]}
        contentContainerStyle={[
          { paddingHorizontal: 25 },
          commonStyles[`${colorScheme}Bg`],
        ]}
      >
        <Text style={styles.heading}>Recipes for you</Text>
        <View
          style={{ position: "relative", marginBottom: metrics.spacing(3) }}
        >
          <TextInput
            placeholderTextColor={colorScheme === "light" ? "#777" : "#999"}
            placeholder="Search recipes"
            style={[styles[`${colorScheme}Input`], { height: 36 }]}
          />
          <Image
            source={images.searchIcon}
            style={{ position: "absolute", right: 15, top: 8 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[styles.specialText, commonStyles[`${colorScheme}Text`]]}
          >
            Today's Special
          </Text>
          <Text style={[styles.seeAllText]}>See all (12)</Text>
        </View>
        <View style={styles.spacer}></View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SpecialCard />
          <SpecialCard />
        </View>
        <View style={styles.spacer}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[styles.specialText, commonStyles[`${colorScheme}Text`]]}
          >
            Category
          </Text>
          <Text style={[styles.seeAllText]}>See all (12)</Text>
        </View>
        <View style={{ height: metrics.spacing(2) }}></View>
        <ScrollView horizontal>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <View
              key={item}
              style={{
                marginRight: metrics.spacing(2),
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
              }}
            >
              <Image
                source={images.cardIcon}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: colors.transparentGray,
                  zIndex: 999,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: fonts.poppinsRegular,
                  }}
                >
                  American
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontFamily: fonts.poppinsSemiBold,
    marginTop: 16,
    marginBottom: 8,
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
  spacer: {
    marginBottom: metrics.spacing(4),
  },
  specialText: {
    fontSize: 16,
    fontFamily: fonts.poppinsRegular,
  },
  seeAllText: {
    color: colors.secondary,
    fontSize: 10,
    fontFamily: fonts.poppinsRegular,
  },
});
