import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

//import info
import ProductButton from './ProductButton'
import SuccessButton from '../UI/SuccessButton'

const {width, height} = Dimensions.get('window')

const InfoContent = props => {
  

  return (
    <View style={styles.generalContent}>
      <View>
        
        <ProductButton
          name="Kilos"
          iconName="ios-flame"
          showOptions = {props.showOptions}
          messageInput="Introduce los Kilos"
          showTextInputPrice={props.showTextInputPrice} 
          showInputPrice={props.showInputPrice}
          updateInputState = {props.updateInputState}/>

        <ProductButton
          name="Cantidad"
          iconName="md-flask"
          showOptions = {props.showOptions}
          messageInput="Introduce el Monto"
          showTextInputPrice={props.showTextInputPrice} 
          showInputPrice={props.showInputPrice}
          updateInputState = {props.updateInputState}/>

        </View>
      <SuccessButton title={'Comprar'}/>
    </View>
  )
}

const styles = StyleSheet.create({

  generalContent : {
    position : 'absolute',
    justifyContent : 'center',
    alignItems : 'center',
  }
})

export default InfoContent
