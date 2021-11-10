import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { SingnIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { theme } from "../global/styles/theme";



const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100
        }

      }}

    >
      <Screen
        name="SingIn"
        component={SingnIn}
      />

      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />

    </Navigator>
  )
}