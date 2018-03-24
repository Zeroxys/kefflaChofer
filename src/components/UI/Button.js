import React from 'React'
import {View, TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native'

const ButtonRegister = (props) => {
  let label = null   
  let onPress = (!props.onPress && props.Login) ?  props.Login : props.onPress

  if(props.isLoading) {
    label = <ActivityIndicator size="small" color="white"/>
  }
  if(!props.isLoading) {
    label = <Text style={{color : 'white', fontWeight : '900'}}>{props.name}</Text>
  }

  return (
    <TouchableOpacity 
      style={[styles.content, {backgroundColor : props.color}]} 
      onPress={() => onPress()}>
      {label}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content : {
    justifyContent : 'center',
    alignItems: 'center',
    flex : 0,
    height : 30,
    elevation : 5,
    borderRadius : 3
  }
})

export default ButtonRegister
