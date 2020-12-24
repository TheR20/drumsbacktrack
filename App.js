import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
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

//Se usa para iniciar la musica de fondo
var Sound = require('react-native-sound');
import Bananas from './src/icono';
import Credenciales from './src/credenciales';
var activi = "desactivado";

var sound = new Sound("blues60", Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
// Poner el valor -1 hace que el loop sea infinito

 //sound.play();
});


var funcionSonido =(audio, activoOno)=>{
  var musica = "blues80";

  // Poner el valor -1 hace que el loop sea infinito
  sound.setNumberOfLoops(-1);
   //sound.play();

musica = genero[audio].toLowerCase() + tempo[audio];

   console.log(musica);
   sound = new Sound("https://megabanana.mx/musicaDrumApp/"+ musica+ ".mp3", Sound.MAIN_BUNDLE, (error) => {
  if (error) {
  console.log('error', error);
  return;
  }

  sound.setNumberOfLoops(-1);
  activi = "activado";
 sound.play();

  });

}


const bannerSuperiorID = "ca-app-pub-8454341646863233/1276958461";
const bannerSuperiorID2 = "ca-app-pub-8454341646863233/8791652257";
const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
'https://i.imgur.com/Pic8oX0.png',
'https://i.imgur.com/5QvqkGj.jpg',
'https://i.imgur.com/BrKnID3.jpg',
'https://i.imgur.com/EriMkdy.jpg',
'https://i.imgur.com/8G2Xt7S.jpg',
'https://i.imgur.com/TeOaa38.jpg',
'https://i.imgur.com/xAm5isr.jpg',
'https://i.imgur.com/40vZuQa.jpg',

'https://i.imgur.com/dwuI3ei.jpg',
'https://i.imgur.com/sDYFUG5.jpg',
];


const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
 function  HomeScreen({ navigation }) {



  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/kM0J2PZ.jpg'}}>

    <BannerAd
                    unitId={bannerSuperiorID}
                               size={BannerAdSize.ADAPTIVE_BANNER}
                         requestOptions={{
                           requestNonPersonalizedAdsOnly: true,
                         }}
                       />


    <View style = {styles.barraSuperior}>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('BackTrack', {genero:'Jazz' , numArreglo:0});}}>
    <Bananas pic={images[0]} titulo="Jazz"/>
  </TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
     {navigation.navigate('BackTrack', {genero:'Blues', numArreglo:1});}}>
    <Bananas pic={images[1]} titulo="Blues"/>
  </TouchableHighlight><TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
    {navigation.navigate('BackTrack', {genero:'Rock', numArreglo:2});}}>
    <Bananas pic={images[2]} titulo="Rock"/>
  </TouchableHighlight>

      </View>

      <View style = {styles.barraSuperior2}>
      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
        {navigation.navigate('BackTrack', {genero:'Reggae' , numArreglo:3});}}>
        <Bananas pic={images[3]} titulo="Reggae"/>
      </TouchableHighlight>
      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
        {navigation.navigate('BackTrack', {genero:'Punk' , numArreglo:4});}}>
        <Bananas pic={images[4]} titulo="Punk"/>
      </TouchableHighlight>
      <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
        {navigation.navigate('BackTrack', {genero:'Metal' , numArreglo:5});}}>
        <Bananas pic={images[5]} titulo="Metal"/>
      </TouchableHighlight>
        </View>


        <View style = {styles.barraSuperior3}>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {navigation.navigate('BackTrack', {genero:'Surf' , numArreglo:6});}}>
          <Bananas pic={images[6]} titulo="Surf"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {navigation.navigate('BackTrack', {genero:'Funk' , numArreglo:7});}}>
          <Bananas pic={images[7]} titulo="Funk"/>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
          {navigation.navigate('BackTrack', {genero:'Lofi' , numArreglo:8});}}>
          <Bananas pic={images[8]} titulo="Lofi"/>
        </TouchableHighlight>
          </View>



          <BannerAd
                          unitId={bannerSuperiorID}
                               size={BannerAdSize.ADAPTIVE_BANNER}
                               requestOptions={{
                                 requestNonPersonalizedAdsOnly: true,
                               }}
                             />





    </ImageBackground>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="BackTrack" component={Credenciales} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage: {
    paddingTop: 20,
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
  marginTop:100,
},

barraSuperior2:{

flexDirection: 'row',
marginTop:60,
},

barraSuperior3:{

flexDirection: 'row',
marginTop:60,
  paddingBottom: 200,
},

barraInferior:{
    position:'absolute',
    bottom:0,
    flex:1,
    flexDirection: 'row',
  },

  itemBarraSuperior:{
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
