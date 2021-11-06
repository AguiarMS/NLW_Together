import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View } from "react-native";
import { styles } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";


export function ButtonAdd({ ...res }: RectButtonProps) {
  return (
    <RectButton style={styles.container}>

      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      >

      </MaterialCommunityIcons>

    </RectButton>
  )
}