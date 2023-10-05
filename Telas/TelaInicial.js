import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

export default function TelaInicial({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        source={require('../assets/background.jpg')}>
        <View>
            <Text style={{ fontWeight: '600', fontSize: 22, textAlign: 'center', padding: 30, paddingTop: 120, paddingBottom: 15 }}>
            Nosso programa facilita a busca de informações sobre Pokémon.            
            </Text>
            <Text style={{ fontWeight: '600', fontSize: 22, textAlign: 'center', padding: 30, paddingTop:0, paddingBottom: 15 }}>            
            Insira o nome ou o ID do Pokémon desejado e obtenha seus detalhes.
            </Text>
            <Text style={{ fontWeight: '600', fontSize: 22, textAlign: 'center', padding: 30, paddingTop:0, paddingBottom: 100  }}>
            Explore o mundo Pokémon de forma rápida e simples com o PokeSearch!
            </Text>
        </View>
        <Button title='VAMOS COMEÇAR A BUSCA!' buttonStyle={{backgroundColor: 'yellow'}}
        titleStyle={{ color: 'black', fontWeight: '780' }} onPress={() => { navigation.navigate('Busca') }} />
      </ImageBackground>
    </View>
  );
}
