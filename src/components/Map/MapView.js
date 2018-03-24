import React from 'react'
import {StyleSheet} from 'react-native'
import Map, {Marker} from 'react-native-maps'
import Aux from '../HOC/Aux'
import MapDirections from './MapDirections'
import clientImg from '../../assets/client.png'


const MapView = props => {

  const trukerUbication = {
    latitude : 18.00375299, 
    longitude : -92.95624869,
  }

  let marker = null

  if(props.marker) {
    marker = <Marker style={{border:'1px solid red'}} pinColor={'#2A56C6'} coordinate={props.initialRegion}/>
  }

  return (
  <Map 
    style={styles.map}
    loadingIndicatorColor={'#2A56C6'}
    loadingBackgroundColor={'#2A56C6'}
    initialRegion={props.initialRegion}
    onPress={props.onPress}
    ref = {props.Ref}>

    {marker}
    
    <MapDirections 
      currentLocation={props.initialRegion}
      destination={{  latitude : 18.00375299, longitude : -92.95624869,}}/>
    
    <MapDirections 
      currentLocation={props.initialRegion}
      destination={{ latitude : 17.9686, longitude : -92.9725}}/>

    <MapDirections 
      currentLocation={props.initialRegion}
      destination={{ latitude : 17.9711, longitude : -92.9684}}/>  

    <Marker pinColor={'#2A56C6'} coordinate={{ latitude : 17.9686, longitude : -92.9725}} image={clientImg} />
    <Marker pinColor={'#2A56C6'} coordinate={{ latitude : 17.9711, longitude : -92.9684}} image={clientImg} />
    <Marker pinColor={'#2A56C6'} coordinate={trukerUbication} image={clientImg} />
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
