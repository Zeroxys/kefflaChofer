import React from 'react'
import {StyleSheet} from 'react-native'
import {View, Text} from 'react-native-animatable'

import ButtonRegister from '../../components/UI/Button'

const Opening = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerButton} animation={'zoomIn'} delay={3800} duration={400}>
        <ButtonRegister
            color='#0277bd'
            name="INGRESAR"
            onPress={() => props.onSignInPress()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width : '70%',
    height : 100,
    justifyContent : 'center',
  },
});

export default Opening
