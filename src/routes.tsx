import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import Detail from "./screens/Detail";

import CustomHeader from "./components/CustomHeader";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <CustomHeader />,
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
