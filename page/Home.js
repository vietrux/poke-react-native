import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
  return (<>
    <StatusBar style="auto"/>
    <View style={{
      justifyContent: "center",
      alignItems: "center",
      
      height: "100%",
    }}>
      <TouchableOpacity style={{
        backgroundColor: '#fdf',
        width: 150,
        flexDirection: 'row',
        fontSize: 16,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
      }}
        onPress={
          () => {
            navigation.navigate('Poke')
          }
        }
      >
        <Text style={{
          fontSize: 20,

        }}>Poke App</Text>
      </TouchableOpacity>
      <Text style={{
        marginTop: 20,
      }}>-Dev: Giang ngoo-</Text>
    </View>
  </>)
}
