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




const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [

    'https://static.wwbw.com/the-music-room/binaries/content/gallery/wwbw/music-room/rtf-promo/stock-drums-1.jpg',
      'https://static.wwbw.com/the-music-room/binaries/content/gallery/wwbw/music-room/rtf-promo/stock-drums-1.jpg',
        'https://static.wwbw.com/the-music-room/binaries/content/gallery/wwbw/music-room/rtf-promo/stock-drums-1.jpg',
          'https://static.wwbw.com/the-music-room/binaries/content/gallery/wwbw/music-room/rtf-promo/stock-drums-1.jpg',
'https://i.imgur.com/5QvqkGj.jpg',
  'https://i.imgur.com/5QvqkGj.jpg',
  'https://i.imgur.com/5QvqkGj.jpg',
    'https://i.imgur.com/5QvqkGj.jpg',
  'https://cdn.shopify.com/s/files/1/1163/2458/files/Resize_mps1731-2.jpg?v=1504690608',
'https://cdn.shopify.com/s/files/1/1163/2458/files/Resize_mps1731-2.jpg?v=1504690608',
  'https://cdn.shopify.com/s/files/1/1163/2458/files/Resize_mps1731-2.jpg?v=1504690608',
'https://cdn.shopify.com/s/files/1/1163/2458/files/Resize_mps1731-2.jpg?v=1504690608',
'https://cdn.shopify.com/s/files/1/1163/2458/files/Resize_mps1731-2.jpg?v=1504690608',
'https://images.squarespace-cdn.com/content/v1/55d88ffae4b098a56d43b5db/1507496347055-PK1VHXS6AHV63WUFJQI5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_3050.JPG',
'https://images.squarespace-cdn.com/content/v1/55d88ffae4b098a56d43b5db/1507496347055-PK1VHXS6AHV63WUFJQI5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_3050.JPG',
'https://images.squarespace-cdn.com/content/v1/55d88ffae4b098a56d43b5db/1507496347055-PK1VHXS6AHV63WUFJQI5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_3050.JPG',
'https://images.squarespace-cdn.com/content/v1/55d88ffae4b098a56d43b5db/1507496347055-PK1VHXS6AHV63WUFJQI5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_3050.JPG',
  'https://i.pinimg.com/736x/37/0b/29/370b29d5d959af45d4ac2d703ff0132c.jpg',
  'https://i.pinimg.com/originals/54/a0/e6/54a0e65ca292315aaa381591529c63ad.jpg',
  'https://i.pinimg.com/originals/54/a0/e6/54a0e65ca292315aaa381591529c63ad.jpg',
  'https://i.pinimg.com/originals/54/a0/e6/54a0e65ca292315aaa381591529c63ad.jpg',
    'https://i.pinimg.com/originals/54/a0/e6/54a0e65ca292315aaa381591529c63ad.jpg',
    'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
    'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
    'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
    'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
      'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
        'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
          'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
            'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
              'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                  'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                    'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                      'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                        'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',
                          'https://zildjian.com/media/wysiwyg/z_homepage_promo_block_3_chroma.jpg',


];




const genero = [
  'Jazz',
  'Jazz',
  'Jazz',
  'Jazz',
  'Blues',
    'Blues',
'Blues',
'Blues',
  'Rock',
  'Rock',
  'Rock',
    'Rock',
    'Rock',
    'Reggae',
    'Reggae',
    'Reggae',
    'Reggae',
    'Surf',
    'Punk',
    'Punk',
      'Punk',
        'Punk',
        'Metal',
          'Metal',
          'Metal',
            'Metal',
              'Metal',
                'Metal',
                  'Metal',
                    'Metal',
                'Metal',
                'Metal',
                'Metal',
                'Metal',
                'Metal',
                'Metal',

        'Hiphop',
];
const tempo = [
  '80',
  '85',
  '95',
  '120',
  '60',
  '80',
  '90',
  '120',
  '60',
  '80',
'95',
'125',
'140',
'75',
'85',
'110',
'120',
  '160',
  '100',
  '115',
  '125',
  '200',
 '75',
 '90',
  '95',
    '100',
      '125',
        '130',
          '140',
            '150',
              '160',
                '170',
                  '180',
                    '190',
                      '200',

        '250',
 '90',
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  gen: genero,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export default function App( { route, navigation }) {
  const scrollX= React.useRef(new Animated.Value(0)).current;





const { genero } = route.params;
  const pararSonido =(estado)=>{

sound.stop();
activi = "desactivado";

}


  return (

    <View style={styles.container}>
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://p0.pikrepo.com/preview/699/998/black-and-silver-microphone-with-stand.jpg'}}>
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
<View style={{ width, justifyContect: 'center', alignItems: 'center'}}>



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
source={{uri: item.photo}}
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
    left: 10,
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
    left: 10,
  bottom: 100,
  textShadowColor: 'blue',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 30,
  position: 'absolute',
  }}
  > {tempo[item.key]}BPS</Text>
</View>
<View style = {styles.barraSuperior}>



<TouchableHighlight style = {styles.itemBarraSuperior} onPress={() => (activi == "desactivado") ? funcionSonido(item.key,activi) : pararSonido()}>
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

});
