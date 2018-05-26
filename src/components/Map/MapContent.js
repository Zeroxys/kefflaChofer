import React, {Component} from 'react'
import {StyleSheet,Text, View, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import MapView from './MapView'
import PositionButton from '../PositionButton/PositionButton'
import ArrowButton from '../ArrowButton/ArrowButton'
import PriceBox from '../PriceBox/PriceBox'

import InfoContent from '../../components/InformationContent'

const {width, height} = Dimensions.get('window')

const MapContent = props => {

  return (
    <View style={styles.mapContent}>
      <MapView
        marker = {props.marker}
        initialRegion={props.initialRegion}
        onPress={props.OnPress}
        Ref = {props.Ref}/>

      {/*Bar menu icon*/}
      <TouchableOpacity style={{height : 50}} onPress={props.showSlideMenu}>
        <Icon style={{marginRight: 300, top: 15}} color= "#424242" size={38} name="md-menu"/>
      </TouchableOpacity>


      <PriceBox/>
      <PositionButton OnPress={props.getCurrentPosition}/>
      {/*<ArrowButton 
        expand={props.expand} 
        OnPress={props.toggle} 
        Icon={props.expand}
        showTextInputPrice={props.showTextInputPrice} 
        showInputPrice={props.showInputPrice}
      updateInputState = {props.updateInputState}/>*/}
    </View>)
}

const styles = StyleSheet.create({
  mapContent : {
    width : '100%',
    minHeight : '100%',
    maxHeight : '100%',
    alignItems :'center',
  }
})

export default MapContent