import React from 'React'
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import InfoContent from '../InformationContent'

const ArrowButton = props => {

  let arrowIcon = null

  if(props.Icon) {
    arrowIcon = "ios-arrow-up"
  } else {
    arrowIcon = "ios-arrow-down"
  }

  return (
    <View style={styles.container}>
      <InfoContent 
        expand={props.expand}
        showTextInputPrice={props.showTextInputPrice} 
        showInputPrice={props.showInputPrice}
        updateInputState = {props.updateInputState}/>

      <TouchableOpacity style={styles.expandButton} onPress={props.OnPress}>
        <Icon name={arrowIcon} size={25} style={{top : 5}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    position : 'absolute',
    alignItems : 'center',
    justifyContent : 'center',
    bottom:  0,
    width : '100%',
    //backgroundColor : '#eee'
    backgroundColor : 'rgba(0,0,0,0.20)'
  },

  expandButton : {
    backgroundColor : '#eee',
    elevation : 5,
    alignItems : 'center',
    width : 40,
    height : 40,
    borderRadius : 100,
    marginBottom : 5,
    marginBottom : 5
  }
})

export default ArrowButton
