import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
//import Modal from '../Modal/Modal'
//import Aux from '../HOC/Aux'

const PriceBox = () => {
  const info = () => {
    alert('Informacion Actualizada sobre el precio del gas')
  }

  return (
    <TouchableOpacity style={styles.gasContent} onPress={info}>
      <Text style={styles.gasFont}>Precio del gas LP al dia:  $10 kg</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gasContent : {
    marginTop : 15,
    width  : 350,
    padding : 10,
    backgroundColor: 'rgba(245,243,243,0.80)'
  },

  gasFont : {
    textAlign : 'center',
    color : 'black',
    fontSize : 15,
  }
})

export default PriceBox
