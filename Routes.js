import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './Telas/TelaInicial';
import TelaBusca from './Telas/TelaBusca';
import TelaFinal from './Telas/TelaFinal';

const Stack = createStackNavigator();

export default function Routes() {
   return(
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
               name='Inicio' 
               component={ TelaInicial } 
               options={{ title:'Bem-vindo ao PokeSearch!' ,
               headerStyle: { backgroundColor: 'white', },
               headerTintColor: 'black', }}
            >   
            </Stack.Screen>
            <Stack.Screen 
               name='TelaBusca' 
               component={ TelaBusca }
               options={{ title:'Busca de Pokemons:' }}>
            </Stack.Screen>
            <Stack.Screen 
               name='Fim' 
               component={ TelaFinal }
               options={{ title:'Dados do seu Pokemon:' }}>
            </Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}