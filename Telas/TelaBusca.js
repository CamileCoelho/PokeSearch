import React from "react";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import { PokemonService } from "../services/pokemon.service";

export default function TelaBusca({navigation}){
   const [nome, setNome] = useState('');
   const pokemonService = new PokemonService();
 
   const buscarPokemon = async () => {
     try {
      const nomeLowerCase = nome.toLowerCase(); 
      const resultado = await pokemonService.selecionarPokemonPorNome(nomeLowerCase);
      navigation.navigate('Fim', {
         nome: resultado.nome,
         id: resultado.id,
         spriteUrl: resultado.spriteUrl,
       });
     } catch (erro) {
       console.error(erro);
     }
   };

   return(
      <ImageBackground
         style={{ flex: 1 }}
         source={ require('../assets/background.jpg') }>
         <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginTop: 10,
               marginBottom: 10, padding: 50, paddingBottom: 130 }}>
               Insira o Nome ou o Id do pokemon desejado:
         </Text>
         <View style={{ flexDirection: 'row', alignItems: 'center', 
               marginLeft: 10, marginRight: 10, justifyContent: "center"}}>
            <TextInput style={{ borderBottomWidth: 1, borderColor: 'black', width: '38%',
                       height: '70%', marginBottom: 15, textAlign: 'center', fontSize: 22 }} 
                       onChangeText={(nome) => setNome(nome)}/> 
         </View>
         <View style={{ width: '100%', marginTop: 20, alignItems: 'center', paddingTop: 140 }}>
            <Button title="BUSCAR" 
                    buttonStyle={{backgroundColor: 'yellow'}}
                    titleStyle={{ color: 'black', fontWeight: '780' }}
                    onPress = {buscarPokemon}/>
         </View>
      </ImageBackground>
   );
}