import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./style";
import { ButtonIcon } from "../../compoments/ButtonIcon";

export function SingnIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent // preenchimento no topo da tela
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch" // garantir que a imagem fique ajustada conforme o tamanho
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>


        <ButtonIcon title='Entrar com Discord'/>

      </View>


    </View>

  );
}