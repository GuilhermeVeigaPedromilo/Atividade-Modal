import { View } from 'react-native';
import styles  from '../styles/Styles';
import ImageProps from './ImageProps';
import TextProps from './TextProps';



export default function Titulo() {
  return (
    <View style={{alignItems: 'center'}} >
      <ImageProps ImageUri={require('../assets/images/logo.png')} ImageStyle={styles.ImagesStyles}/>
      <TextProps TextStyle={[styles.h1, {color: 'white',}]} Texto={"Qual é melhor opção?"}  ></TextProps>
    </View>
  );
}


