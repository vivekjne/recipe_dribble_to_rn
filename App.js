import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import { colors, metrics } from "./src/themes";
import Home from "./src/screens/Home";
import { Image, View } from "react-native";
import images from "./src/assets/images";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabbar from "./src/components/navigation/CustomTabbar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabbar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Intro} />
      <Tab.Screen name="middle" component={Intro} />

      <Tab.Screen name="Filter" component={Intro} />
      <Tab.Screen name="Settings" component={Intro} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Intro"
            component={Intro}
          ></Stack.Screen>

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          ></Stack.Screen>

          <Stack.Screen
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerTintColor: colors.secondary,
            }}
            name="Signup"
            component={Signup}
          ></Stack.Screen>

          <Stack.Screen
            options={{
              headerStyle: {
                elevation: 0,
              },
              headerLeftContainerStyle: {
                paddingLeft: 25,
              },
              headerRightContainerStyle: {
                paddingRight: 25,
              },

              headerLeft: () => <Image source={images.hamburger} />,
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image source={images.notificationIcon} />
                  <Image
                    source={images.headerAvatarDummy}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      marginLeft: metrics.spacing(3),
                    }}
                  />
                </View>
              ),
              // headerTransparent: true,
              headerTitle: "",
              headerTintColor: colors.secondary,
            }}
            name="MainTab"
            component={MyTabs}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
