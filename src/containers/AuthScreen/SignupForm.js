import React, {Component} from 'react'
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {View, Text} from 'react-native-animatable'
import t from 'tcomb-form-native'
import Icon from 'react-native-vector-icons/Ionicons'

import ButtonRegister from '../../components/UI/Button'
import {UserSignupModel, options} from '../../utils/SignupModel'

const {width, height} = Dimensions.get('window')
const Form = t.form.Form

class SignupForm extends Component {
  
  _onPress = ()  => {
    var value = this.refs.form.getValue();
    if (value) {
      console.warn(value);
    }
  }

  render () {
    return (
      <View style={styles.container}
        animation={'fadeInUp'}
        duration={1200}
        delay={0}>

        <Form
          ref="form"
          type={UserSignupModel}
          options={options}/>
  
        <ButtonRegister
            color='#5A8DFE'
            name="REGISTRATE"
            onPress={this._onPress}/>  

        <TouchableOpacity onPress={() => this.props.onLinkPress()}>
          <Text 
            style={styles.link}>{'Ya tienes una cuenta ? '}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:0,
    height: height * 0.5,
    borderRadius : 3,
    borderColor: 'white',
    width : width * 0.8,
  },

  link: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})

export default SignupForm