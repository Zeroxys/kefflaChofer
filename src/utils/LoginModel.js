import React from 'react'
import t from 'tcomb-form-native'
import Icon from 'react-native-vector-icons/Ionicons'

// tcomb model user
const LoginUser = t.struct({
  user :t.String,
  password : t.String
})

// options for the form
const options = {
  auto : 'placeholders',
  fields : {
    user : {
      placeholder : 'USUARIO',
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    },

    password : {
      placeholder : 'CONTRASEÑA',
      password : true,
      secureTextEntry: true,
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    }
  }
}

// tcomb stylesheet
const stylesheet = t.form.Form.stylesheet

const formStyles = {...stylesheet}

formStyles.fieldSet = "red"

formStyles.formGroup.normal.marginBottom = 10
formStyles.formGroup.error.marginBottom = 0

formStyles.button.height = 0

formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.normal.color = 'white'
formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.normal.fontSize = 10;
formStyles.textbox.error.fontSize = 10;
formStyles.textbox.error.borderWidth = 0;
formStyles.textbox.normal.marginBottom = 0;
formStyles.textbox.error.marginBottom = 0;

formStyles.textboxView.normal.borderWidth = 0;
formStyles.textboxView.normal.borderColor = '#FFF';
formStyles.textboxView.error.borderWidth = 0;
formStyles.textboxView.normal.borderRadius = 0;
formStyles.textboxView.error.borderRadius = 0;
formStyles.textboxView.normal.borderBottomWidth = 1;
formStyles.textboxView.error.borderBottomWidth = 1;
formStyles.textboxView.error.borderColor = '#FFF';
formStyles.textbox.normal.marginBottom = 5;

export {LoginUser, formStyles, options}