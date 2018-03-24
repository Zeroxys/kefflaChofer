import React, {Component} from 'react';
import {} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import AuthScreen from './containers/AuthScreen/index'
import HomeScreen from './containers/HomeScreen/index'

class App extends Component {

  state = {
    isLoggedIn : false,
    isLoading : false,
    isAppReady : false
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

    console.warn(this.state.isLoading)
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
      Screen = <HomeScreen/>
    } else {
      Screen = <AuthScreen
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
