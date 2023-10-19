import React from "react";
import { Button } from "react-native-elements";
import { View, Text, Image, ImageBackground } from "react-native";

export default function TelaFinal({ navigation, route }) {

   return (
      <ImageBackground
         style={{ flex: 1, alignItems: 'center' }}
         source={require('../assets/background.jpg')}>

         <View style={{ width: '100%', height: '64%', alignItems: 'center', 
               justifyContent: 'flex-end' }}>
            <View style={{ flexDirection: "row", marginRight: 10, marginBottom: 50 }}>
               <Text style={{ fontWeight: 'bold', marginRight: 10 }}>{route.params.id}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 10 }}>
               <Text style={{ fontWeight: 'bold', marginRight: 10, marginBottom: 50}}>
                    {route.params.nome.toUpperCase()}</Text>
            </View>

            <View style={{ alignItems: "center" }}>
               <Image source={{ uri: route.params.spriteUrl }} 
                      style={{ width: 200, height: 200 }} />
            </View>
         </View>
         
         <View style={{ width: '100%', height: '25%', alignItems: 'center', 
               justifyContent: 'flex-end' }}>
            <View style={{ width: 200 }}>

               <Button title='VOLTAR A BUSCA' buttonStyle={{ backgroundColor: 'yellow', 
                       marginBottom: 10 }}
                       titleStyle={{ color: 'black', fontWeight: '780' }} 
                       onPress={() => navigation.goBack()} />

               <Button title='VOLTAR AO INICIO' buttonStyle={{ backgroundColor: 'yellow' }}
                       titleStyle={{ color: 'black', fontWeight: '780' }} 
                       onPress={() => navigation.popToTop()} />

            </View>
         </View>

      </ImageBackground>
   );
}