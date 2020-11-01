import React from "react";
import { View, Text, Image } from "react-native";
import images from "../../assets/images";
import { commonStyles, fonts, metrics } from "../../themes";
import { useColorScheme } from "react-native-appearance";
export default function SpecialCard() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: metrics.spacing(3) }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={images.headerAvatarDummy}
          style={{ width: 22, height: 22, borderRadius: 11, marginRight: 8 }}
        />
        <Text
          style={[
            { fontSize: 8, fontFamily: fonts.poppinsRegular },
            commonStyles[`${colorScheme}Text`],
          ]}
        >
          John Doe
        </Text>
      </View>
      <Image
        source={images.cardIcon}
        style={{
          height: 200,
          width: "100%",
          borderRadius: 8,
          marginTop: metrics.spacing(2),
        }}
      />
      <View>
        <Text
          style={[
            {
              fontFamily: fonts.poppinsRegular,
              fontSize: 10,
              color: "#5D5D5D",
              marginTop: metrics.spacing(2),
            },
          ]}
        >
          Thai mixed seafood thick soup with octopus
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.heartIcon}
              style={{ width: 12, resizeMode: "contain" }}
            />
            <Text style={{ fontFamily: fonts.poppinsRegular, fontSize: 8 }}>
              {"  "}
              23 likes
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.shareIcon}
              style={{
                width: 12,
                height: 12,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontFamily: fonts.poppinsRegular, fontSize: 8 }}>
              {"  "}
              Share
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
