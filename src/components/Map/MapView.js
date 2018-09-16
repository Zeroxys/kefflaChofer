import React from 'react'
import {StyleSheet} from 'react-native'
import Map, {Marker} from 'react-native-maps'
import MapDirections from './MapDirections'
import clientImg from '../../assets/home.png'


const MapView = props => {

  const trukerUbication = {
    latitude : 18.00375299, 
    longitude : -92.95624869,
  }

  let markerSeller = null
  let customerDirection = null
  let customerMarker = null

  if(props.marker) {
    //Posicion inicial
    console.warn('Region inicial', props.initialRegion)
    markerSeller = <Marker pinColor={'#2A56C6'} coordinate={props.initialRegion}/>
  }

  if(props.customerData.lat > 0) {
    console.warn('CustomerData --->', props.customerData)
    console.warn('customer lat', props.customerData.lat)
    console.warn('customer lng', props.customerData.lng)

    customerDirection = <MapDirections 
      currentLocation={props.initialRegion}
      destination={{ latitude : props.customerData.lat, longitude : props.customerData.lng}}/>

    customerMarker = <Marker pinColor={'#2A56C6'} 
      coordinate={{ latitude : parseFloat(props.customerData.lat), longitude : parseFloat(props.customerData.lng)}}
      title={ `Sr(a). ${props.userName}`}
      description={ `phone : ${props.userPhone}`}
      image={clientImg}/>

  }

  return (
  <Map 
    showsCompass={false}
    style={styles.map}
    loadingIndicatorColor={'#2A56C6'}
    loadingBackgroundColor={'#2A56C6'}
    initialRegion={props.initialRegion}
    onPress={props.onPress}
    ref = {props.Ref}>

    {markerSeller}
    {customerDirection}
    {customerMarker}
  </Map>  
  )
}

const styles = StyleSheet.create({
  map : {
    position : 'absolute',
    width : '100%',
    height : '100%'
  }
})

export default MapView
