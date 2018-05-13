import React from 'react'
import {View, Text} from 'react-native'
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'

LoginManager.logInWithReadPermissions(['public_profile']).then(
  function(result) {
    if (result.isCancelled) {
      alert('Login cancelled');
    } else {
      alert('Login success with permissions: '
        +result.grantedPermissions.toString());
    }
  },
  function(error) {
    alert('Login fail with error: ' + error);
  }
);

const Login = (props) => {

  const onLoginFinished = props.onPress()

  return (
    <View>
      <LoginButton
        onLoginFinished= {() => onLoginFinished()}
        onLogoutFinished={() => alert("logout.")}/>
    </View>
  )
}

export default Login