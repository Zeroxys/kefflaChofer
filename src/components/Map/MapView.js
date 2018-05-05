import React from 'react'
import {StyleSheet} from 'react-native'
import Map, {Marker, Polygon} from 'react-native-maps'
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
      destination={{  latitude : 18.00375299, longitude : -92.95624869}}/>
    
    <Polygon coordinates={[
      {
        latitude : 17.99434699, longitude : -92.92206881,
      },
      {
        latitude : 17.99624493, longitude : -92.92760489
      },
      {
        latitude : 18.00087137, longitude : -92.92683001
      },
      {
        latitude : 17.99928568, longitude : -92.92052386
      },
    ]} strokeWidth ={0} fillColor={'rgba(154,243,154,0.5)'} />

    <Polygon coordinates={[
      {
        latitude : 17.98774282, longitude : -92.9418818,
      },
      {
        latitude : 17.96406694, longitude : -92.9634253
      },
      {
        latitude : 17.94961493, longitude : -92.94558476
      },
      {
        latitude : 17.9657611, longitude : -92.9149432
      },
    ]} strokeWidth ={0} fillColor={'rgba(154,187,243,0.5)'} />

    <Polygon coordinates={[
      {
        latitude : 17.9658, longitude : -92.9149,
      },
      {
        latitude : 18.00284995, longitude : -92.95799595
      },
      {
        latitude : 18.03117277, longitude : -92.91900736
      },
      {
        latitude : 18.00558449, longitude : -92.90691077
      },
    ]} strokeWidth ={0} fillColor={'rgba(247,82,110,0.5)'} />



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
