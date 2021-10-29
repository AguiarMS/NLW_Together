import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { SingnIn } from "../screens/SignIn";
import { Background } from "../compoments/Background";
import { theme } from "../global/styles/theme";


const {Navigator, Screen} = createNativeStackNavigator()

export function AuthRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
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
    </Navigator>
  )
}