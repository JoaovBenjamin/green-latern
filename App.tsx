import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from "./assets/pictures/symbol-on.png"
import symbolOff from  "./assets/pictures/symbol-off.png"
import React, {useState} from 'react';

export default function App() {
  const [isActive, setIsActivate] = useState(false);

  function handleSymbol(){
    setIsActivate((oldValue : boolean) => {
      return !oldValue;
    })
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      {/*  Basico sobre estilização

      <Text style={styles2.titleStyle}>Hello World</Text>
      <View>
        Componentes estilizados in-line
        <Text 
        style={{
          color:'red',
          backgroundColor: "blue",
          fontSize:30,
        }}
        >
          Hello Joao
        </Text>
      </View> */}
      <TouchableOpacity 
      onPress={handleSymbol}>

      <Image 
          source={isActive ? symbolOn : symbolOff}
        >
      </Image>
      </TouchableOpacity>
     
      {/* <Image
      source={symbolOff}
      /> */}
    </View>
  );
}

// Estilizações da parte basica de React Native
// const styles2 = StyleSheet.create({
//   titleStyle:{
//     fontSize:15,
//     color:'f1f1f1'
//   }
// })

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
   containerOff:{
    flex:1,
    backgroundColor:'gray',
    alignItems: 'center',
    justifyContent: 'center',
   }
});
