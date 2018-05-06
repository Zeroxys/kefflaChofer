import React from 'react'
import {View, Text} from 'react-native'
import {LoginButton, LoginManager, AccessToken} from 'react-native-fbsdk'

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

const Login = () => {
  return (
    <View>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert(data.accessToken.toString())
                }
              )
            }
          }
        }
      onLogoutFinished={() => alert("logout.")}/>
    </View>
  )
}

export default Login