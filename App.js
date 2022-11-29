import Home from "./page/Home";
import Poke from "./page/Poke";
import OnePoke from "./page/OnePoke";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (<>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home} />
        <Stack.Screen 
        name="Poke" 
        component={Poke} 
        options={{
          headerStyle: {
            backgroundColor: '#fdf',
          },
        }}
        />
        <Stack.Screen 
        name="OnePoke"
        component={OnePoke} 
        options={({ route }) => ({
          headerTitle: route.params.poke.name.toUpperCase(),
          headerStyle: {
            backgroundColor: '#fdf',
          },
          headerTintColor: '#000',
          headerRight: () => (
            <Image source={
              { uri: route.params.poke.sprites.front_default }
            }
              style={{
                width: 50,
                height: 50,
              }}
            />
          )
        })} />
        
      </Stack.Navigator>
    </NavigationContainer>
  </>)
}