import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

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
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
