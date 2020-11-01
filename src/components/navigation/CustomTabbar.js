import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "../../assets/images";
import { colors, fonts } from "../../themes";
export default function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let icon;
        if (route.name === "Home") {
          icon = images.homeIcon;
        } else if (route.name === "Saved") {
          icon = images.bookmarkIcon;
        } else if (route.name === "Filter") {
          icon = images.filterIcon;
        } else if (route.name === "Settings") {
          icon = images.settingsIcon;
        } else if (route.name === "middle") {
          icon = images.plusIcon;
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              elevation: 4,
              paddingBottom: 20,
            }}
          >
            {route.name !== "middle" && (
              <>
                <Image source={icon} />
                <Text
                  style={{
                    color: isFocused ? colors.secondary : "#777",
                    fontFamily: fonts.poppinsRegular,
                    fontSize: 11,
                  }}
                >
                  {label}
                </Text>
              </>
            )}

            {route.name === "middle" && (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#fff",
                  bottom: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity>
                  <Image source={icon} style={{ width: 55, height: 55 }} />
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
