import React, {Component} from 'react'
import {StyleSheet,Text, View, Dimensions} from 'react-native'

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