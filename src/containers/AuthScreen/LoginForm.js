import React, {Component} from 'react'
import {StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import {View, Text} from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import t from 'tcomb-form-native'

import {LoginUser, formStyles, options} from '../../utils/LoginModel'
import ButtonRegister from '../../components/UI/Button'

const {height, width} = Dimensions.get('window')
const Form = t.form.Form

class LoginForm extends Component { 

  constructor(props) {
    super(props)
  }

  render () {

    let state = this.props.isLoading

    return(<View
        animation={'fadeInUp'}
        duration={1200}
        delay={0}
        style={styles.container}>

          <Form
            ref="form"
            type={LoginUser}
            options={options}/>
            
            <ButtonRegister
              color='#5A8DFE'
              name="INICIAR SESIÓN"
              Login={this.props.Login}
              isLoading={this.props.isLoading}/>
      </View>)
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    borderRadius : 3,
    width : width * 0.8,
  },
  link: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})

export default LoginForm
