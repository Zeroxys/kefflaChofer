import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const apikey = "AIzaSyAq9Rhbmb3PM6SL2XFzy61Xi1-92huuUwk"

const trukerUbication = {
  latitude : 18.00375299, 
  longitude : -92.95624869,
}

const MapDirections = (props) => {

  const onError = (err) => {
    alert('Error al traer la ubicacion del chofer')
  }

  return (
    <MapViewDirections
      onError = {onError}
      strokeWidth={3}
      strokeColor="blue"
      origin={props.currentLocation}
      destination={trukerUbication}
      apikey={apikey}/>
  )
}

export default MapDirections