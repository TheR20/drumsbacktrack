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

var activi = "desactivado";

var sound = new Sound("blues60", Sound.MAIN_BUNDLE, (error) => {
if (error) {
console.log('error', error);
return;
}
// Poner el valor -1 hace que el loop sea infinito

 //sound.play();
});


var funcionSonido =(audio, activoOno , gnero, nmArreglo)=>{
  var musica = "blues80";
  var elgenero = gnero+'';
  var elnumArreglo = nmArreglo;
  // Poner el valor -1 hace que el loop sea infinito
  sound.setNumberOfLoops(-1);
   //sound.play();

musica = elgenero.toLowerCase() + tempo[elnumArreglo][audio];

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
var tocando = "Playing "+elgenero+ "-"+tempo[elnumArreglo][audio]+"BPS";
return tocando;
}



const bannerSuperiorID = "ca-app-pub-8454341646863233/8963876794";
const bannerSuperiorID2 = "a-app-pub-8454341646863233/8506078776";
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

const tempo = [
['80','85','95','120'],
['60','80','90','120'],
['60','80','95','125','140'],
['75','85','110','120'],
['100','115','125','200',],
['75','90','95','100','125','130','140','150','160','170','180','190','200','250'],
['100','120','140','150','160','170'],
[ '80','90','100','105','120'],
[ '34','52','87','90','113'],
];

var estadoTocandoPausado = "Audio Paused";
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
export default function App( { route, navigation }) {


    const [imagenActi, setimagenActi] = React.useState(estadoTocandoPausado);
  const scrollX= React.useRef(new Animated.Value(0)).current;
const { genero } = route.params;
const { numArreglo } = route.params;

const data = tempo[numArreglo].map((image, index) => ({
  key: String(index),
  photo: image,

}));


  const pararSonido =(estado)=>{
sound.stop();
activi = "desactivado";
setimagenActi("Audio Paused");
}

  return (

    <View style={styles.container}>

    <ImageBackground style={styles.backgroundImage} source={{uri:
      'https://i.imgur.com/kM0J2PZ.jpg'}}>
      <BannerAd
                      unitId={bannerSuperiorID}
                                 size={BannerAdSize.ADAPTIVE_BANNER}
                           requestOptions={{
                             requestNonPersonalizedAdsOnly: true,
                           }}
                         />



    <Animated.FlatList
    data={data}
    keyExtractor={item => item.key}
    horizontal
    showHorizontalScrollIndicator={false}
    paginEnabled
    onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {x: scrollX}}}],
      {useNativeDriver: true}
      )}
      renderItem={({ item, index   })=>{
      const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
      ];
        const traslateX = scrollX.interpolate(
          {
            inputRange,
            outputRange: [-width * .7,0,width *0.7],
          }
          );

      return(


<View style={{ width, justifyContect: 'center', alignItems: 'center', paddingTop: 70,}}>


<View
style={{


  borderRadius:18,
  padding: 12,
  backgroundColor: 'white',
}}
>
<View
style={{
width: ITEM_WIDTH,
height: ITEM_HEIGHT,
overflow: 'hidden',
alignItems: 'center',
borderRadius:14,
  }}
>



<Image
source={{uri: images[numArreglo]}}
style={{
width: ITEM_WIDTH *1.4,
height: ITEM_HEIGHT,
resizeMode: 'cover',

  }}/>
  <Text
  style={{
    fontSize: 60,
        fontWeight: "bold",
        color: "white",
      textAlign: 'center',
  bottom: 240,
  textShadowColor: 'red',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 30,
  position: 'absolute',
  }}
  > {genero}</Text>


  <Text
  style={{
    fontSize: 60,
        fontWeight: "bold",
        color: "white",
      textAlign: 'center',
  bottom: 100,
  textShadowColor: 'blue',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 30,
  position: 'absolute',
  }}
  > {tempo[numArreglo][item.key]}BPS</Text>
</View>
<View style = {styles.barraSuperior}>



<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() =>
  (activi == "desactivado") ? setimagenActi(funcionSonido(item.key,activi, genero, numArreglo )) : pararSonido()}>
  <Image
source ={{uri: "https://i.imgur.com/XLtiJG8.png"}}
style={{
  width: 120,
  height: 120,

  position: 'absolute',
  }}
/>
</TouchableHighlight>
  <TouchableHighlight style = {styles.itemBarraSuperior2} onPress={() =>  pararSonido()}>
    <Image
  source ={{uri: "https://i.imgur.com/NzlPRMb.png"}}
  style={{
    width: 120,
    height: 120,

    position: 'absolute',
    }}
  />
  </TouchableHighlight>
</View>
</View>


</View>

  );

  }}
/>




<Image
source ={{uri: "https://i.imgur.com/9AtS5Hu.png"}}
style={{
width: 120,
height: 120,
top: 120,
right: 25,
position: 'absolute',
}}
/>
<Text
style={{
  fontSize: 30,
      fontWeight: "bold",
      color: "white",
textAlign: 'center',
bottom: 90,

textShadowOffset: {width: -1, height: 1},
textShadowRadius: 30,
}}
> {imagenActi}</Text>



<BannerAd
                unitId={bannerSuperiorID2}
                           size={BannerAdSize.ADAPTIVE_BANNER}
                     requestOptions={{
                       requestNonPersonalizedAdsOnly: true,
                     }}
                   />
  </ImageBackground>
    </View>

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

});
