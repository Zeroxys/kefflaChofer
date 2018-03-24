import React from 'react'
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

const PositionButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContent} onPress={props.OnPress}>
      <View style={styles.iconContent}>
        <Icon color= "#4285F4" size={28} name="md-locate"/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContent : {
    position : 'absolute',
    bottom : '9%',
    right: '5%',
    backgroundColor: 'white',
    width : 50,
    height : 50,
    borderRadius : 100,
    elevation : 5,
    zIndex : 5,
  },

  iconContent : {
    top : 10,
    justifyContent : 'center',
    alignItems :'center'
  },
})


export default PositionButton