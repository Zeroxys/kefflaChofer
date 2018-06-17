import React, {Component, AsyncStorage} from 'react';
import {} from 'react-native';
import {AccessToken} from 'react-native-fbsdk'
import SplashScreen from 'react-native-splash-screen'
import axios from 'axios'

import AuthScreen from './containers/AuthScreen/index'
import HomeScreen from './containers/HomeScreen/index'

class App extends Component {

  state = {
    isLoggedIn : false,
    isLoading : false,
    isAppReady : false,

    facebookManager : {
        id : null,
        name : null,
        picture : null
    }
  }

  _facebookManager = (error, result) => {
    if (error) {
      alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {

      AccessToken.getCurrentAccessToken().then(
        (data) => {

          axios.get(`https://graph.facebook.com/v3.0/me?fields=id,name,picture&access_token=${data.accessToken}`).then( res => {
            
            this.setState(prevState => {
              return {
                facebookManager : prevState.facebookManager = {...res.data},
                isAppReady : prevState.isAppReady = true,
                isLoggedIn : prevState.isLoggedIn = true
              } 
            })
                               
          }).catch (err => {
            return console.warn('err' + err)
          })
        }
      )
    }
  }

  //Simulate what the user is Login
  _Login = (username, password) => {
    this.setState( prevState => {
      return {
        isLoading : !prevState.isLoading
      }
    })

    setTimeout( () => {
      this.setState( prevState => {

        return {
          isLoading : prevState.isLoading = false,
          isLoggedIn : prevState.isLoggedIn = true
        }
      })
    }, 2500)

    //console.warn(this.state.isLoading)
  }

  //Simulate what the user is SignUp
  _SignUp = (username, password, fullName) => {
    
    this.setState( (prevState) => {
      isLoading : this.prevState.isLoading = true
    })

    setTimeout( () => {
      this.setState( (prevState) => {
        isLoading : this.prevState.isLoading = false
        isLoggedIn : this.prevState.isLoggedIn = true
      })
    }, 1000)

  }

  componentDidMount () {
    setTimeout( () => {
      SplashScreen.hide()
    },2500)
  }

  render() {

    let Screen = null

    if(this.state.isAppReady) {
      Screen = <HomeScreen
                  facebookManager = {this.state.facebookManager}/>
    } else {
      Screen = <AuthScreen
                  onFacebookManager={this._facebookManager}
                  Login={this._Login}
                  Signup={this._SignUp}
                  isLoggedIn={this.state.isLoggedIn}
                  isLoading={this.state.isLoading}
                  isAppReady={this.state.isAppReady}
                  onLoginAnimationCompleted={() => this.setState({isAppReady : true})}/> 
    }

    return Screen
  }
}


export default App
