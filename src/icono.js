import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

const Bananas = (props, { navigation }) => {

  return(

    <View
    style={{


      borderRadius:18,
      padding: 5,
      backgroundColor: 'white',
    }}
    >
    <View
    style={{
    width: 80,
    height: 80,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius:14,
      }}
    >

    <Image
    source={{uri: props.pic}}
    style={{
    width: 100,
    height: 100,
    resizeMode: 'cover',

      }}/>
    </View>

    <Text
    style={{
      fontSize: 18,
          fontWeight: "bold",
          color: "white",
    textAlign: 'center',
    bottom: -30,
    textShadowColor: 'blue',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 30,
    position: 'absolute',
    }}
    > {props.titulo}</Text>
    </View>


  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage: {
    paddingTop: 70,
    flex: 1,
    resizeMode: 'cover',
  },
  itemBarraSuperior:{
    width: 120,
    height: 120,

    position: 'absolute',
    bottom: -30,
    right: 10,

  },


  itemBarraSuperior2:{
    width: 120,
    height: 120,

    position: 'absolute',
    bottom: -30,
    left: 10,

  },

  barraSuperior:{

  flexDirection: 'row',
  marginTop:5,
},

toucheable:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  height:70,
  width:50,
  marginLeft:5,
  marginRight:5,

},

});

export default Bananas;
