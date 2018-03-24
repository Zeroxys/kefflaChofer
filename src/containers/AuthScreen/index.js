import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, Dimensions} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {Image} from 'react-native-animatable'

import LogoImg from '../../assets/gas.png'
import LogoImg2 from '../../assets/iconGas.png'
import Opening from './opening'

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const {width, height} = Dimensions.get('window')

class AuthScreen extends Component {

  state = {
    visibleForm : null
  }

  componentWillUpdate (nextProps) {
    if(!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this._hideAuthScreen()
    }
  }

  _hideAuthScreen = async () => {
    await this._setVisibleForm(null)
    await this.logoImgRef.fadeOut(1200)
    this.props.onLoginAnimationCompleted()
  }

  _setVisibleForm = async (visibleForm) => {
    this.setState ( prevState => {
      return {
        visibleForm : prevState.visibleForm = visibleForm
      }
    })
  }

  render() {

    let formStyle = !this.state.visibleForm ? { height: 0 } : { marginTop: 20 }
    let OpeningButtons = null
    let Forms = null

    //Show the Buttons component
    if(!this.state.visibleForm && !this.props.isLoggedIn) {
      OpeningButtons = <Opening
        onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
        onSignInPress={() => this._setVisibleForm('LOGIN')}/>
    }

    // Redirect to Login Form
    if(this.state.visibleForm === 'LOGIN') {
      Forms =  <LoginForm
        Login={this.props.Login}
        isLoading={this.props.isLoading}
        onCreateAccountPress={() => this._setVisibleForm('LOGIN')}
        onLinkPress={() => this._setVisibleForm('SIGNUP')}/>
    }

    //Redirect to SignUp Form
    if(this.state.visibleForm === 'SIGNUP') {
      Forms =  <SignupForm
        onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
        onLinkPress={() => this._setVisibleForm('LOGIN')}/>
    }

    //'#4fc3f7', '#3b5998', '#192f6a'
    return (
      <LinearGradient colors={['#00acd2', '#034d88']} style={styles.linearGradient}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.10)"/>

        <View style={styles.content}>          
          <Image
            animation={'bounceIn'}
            duration={900}
            delay={2700}
            ref={ ref => this.logoImgRef = ref}
            style={styles.LogoImg}
            source={LogoImg2}/>

          {OpeningButtons}
          {Forms}
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({

  linearGradient: {
    flex:1,
  },
  
  content : {
    flex: 1,
    height: height,
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent : 'space-between',
    marginTop : '6%'
  },

  LogoImg: {
    flex:1,
    marginTop: '25%',
    width : width * 0.5,
    resizeMode : 'contain'
  }
});

export default AuthScreen
