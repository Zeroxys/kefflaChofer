import React from 'react'
import {View, Text} from 'react-native'
import {LoginButton} from 'react-native-fbsdk'

const Login = (props) => {

  return <LoginButton
              readPermissions={["public_profile"]}
              onLoginFinished={props.onFacebookManager}
              onLogoutFinished={() => alert("Cerrando la Sesion")}/>
  
}

export default Login