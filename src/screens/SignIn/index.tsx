import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./style";
import { ButtonIcon } from "../../compoments/ButtonIcon";

export function SingnIn() {

  return (
    <View style={styles.container}>
      
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch" // garantir que a imagem fique ajustada conforme o tamanho
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>


        <ButtonIcon title='Entrar com Discord' />

      </View>
    </View>

  );
}