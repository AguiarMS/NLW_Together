import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Profile } from "../../compoments/Profile";
import { ButtonAdd } from "../../compoments/ButtonAdd";
import { CategorySelect } from "../../compoments/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../compoments/ListHeader";
import { FlatList } from "react-native-gesture-handler";
import { Appointment } from "../../compoments/Appointment";
import { ListDivider } from "../../compoments/ListDivider";
import { Background } from "../../compoments/Background";
import { useNavigation } from '@react-navigation/native'

export function Home() {

  const [category, setCategory] = useState('')

  const navigation = useNavigation();


  //FlatList
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma pardida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma pardida da md10'
    }
  ]


  function handleCategoriSelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId) // se o Id atual for o mesmo que esta sendo clicado ele vai desmarcar, caso contrario atribui um novo Id
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }


  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>


      <CategorySelect
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas Agendadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id} // a flatlist da um ID
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </Background>
  )
}