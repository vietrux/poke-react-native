import { Text, Image, View } from "react-native";

export default function OnePoke({ route }) {
  return (<>
    <View style={{
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      padding: 10,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
      }}>
        <View style={{
          alignItems: 'center',
          width: "50%",
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>{route.params.poke.name.toUpperCase()}</Text>
          <Text style={{
            fontSize: 16,
          }}>Weight: {route.params.poke.weight}</Text>
          <Text style={{
            fontSize: 16,
          }}>Height: {route.params.poke.height}</Text>
        </View>
        <View style={{
          alignItems: 'center',
          width: "50%",
          
        }}>
          <Image source={
            { uri: route.params.poke.sprites.other["official-artwork"].front_default }
          }
            style={{
              width: 200,
              height: 200,
              objectFit: 'cover',
            }}
          />
        </View>
      </View>
    </View>
    <View style={{}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}
        >Stats</Text>

        {
          route.params.poke.stats.map((type, index) => {
            return (
              <View key={index} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
              }}>
                <Text>{type.stat.name}</Text>
                <Text>{type.base_stat}</Text>
              </View>
            )
          })
        }
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}
        >Abilities</Text>
        {
          route.params.poke.abilities.map((abilitie, index) => {
            return (
              <View key={index} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
              }}>
                <Text>{abilitie.ability.name}</Text>
              </View>
            )
          })
        }
      </View>
    </View>

  </>)
}