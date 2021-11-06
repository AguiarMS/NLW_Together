import React from "react";
import { Image } from "react-native";
import { styles } from "./style";


export function GuildIcon() {

  const uri = 'https://icon-library.com/images/dota-icon/dota-icon-6.jpg'
  

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />


  )
}