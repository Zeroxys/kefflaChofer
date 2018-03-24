import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const SuccessButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.success}
      title={props.title} 
      onPress={props.onPress}>  
      <Text style={{color : 'white'}}>{props.title}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  success : {
    top:5,
    elevation : 2,
    width : 300,
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor : "#2A56C6",
    height : 30
  }
})

export default SuccessButton
