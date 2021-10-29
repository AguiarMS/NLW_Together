import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import { Profile } from "../../compoments/Profile";

export function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}