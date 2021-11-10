import React from "react";
import { View, Text, Image } from "react-native";
import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./style";
import { ButtonIcon } from "../../compoments/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../compoments/Background";



export function SingnIn() {


  const navigation = useNavigation()

  function hanbleSignIn() {
    navigation.navigate('Home')
  }



  return (
    <Background>
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


          <ButtonIcon
            title='Entrar com Discord'
            onPress={hanbleSignIn}
          />
        </View>
      </View>
    </Background>

  );
}