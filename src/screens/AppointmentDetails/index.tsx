import React from "react";
import { Fontisto } from '@expo/vector-icons'
import { Background } from "../../compoments/Background";
import { BorderlessButton } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import { styles } from "./styles";
import { Header } from '../../compoments/Header'
import { BannerImg } from '../../assets/banner.png'
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >


      </ImageBackground>


    </Background>
  )
}