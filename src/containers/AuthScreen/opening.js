import React from 'react'
import {StyleSheet} from 'react-native'
import {View, Text} from 'react-native-animatable'

import ButtonRegister from '../../components/UI/Button'
import Login from '../../components/FBlogin/FbLogin'

const Opening = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerButton} animation={'zoomIn'} delay={3800} duration={400}>

        <Login onFacebookManager={props.onFacebookManager}/>
        <ButtonRegister
            color='#0277bd'
            name="INGRESAR"
            onPress={() => props.onSignInPress()}/>

      </View>

      <Text style={{color : 'white'}}>keflaApp derechos reservados</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    width : '70%',
    height : 80,
    justifyContent : 'center',
    alignItems : 'center',
  },

  centerButton : {
    justifyContent : 'space-around',
    height : 100,
    marginBottom : 20,
  }
});

export default Opening
