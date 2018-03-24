import React from 'react'
import t from 'tcomb-form-native'
import Icon from 'react-native-vector-icons'

const UserSignupModel = t.struct({
  name: t.String,
  email : t.String,
  phone : t.String,
  password : t.String
})

const options = {
  auto : 'placeholders',
  fields : {
    name : {
      placeholder : 'NOMBRE',
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    },

    email : {
      placeholder : 'CORREO ELECTRONICO',
      error : <Icon name="md-alert" size={19} color="#e53935"/>
    },

    phone : {
      placeholder : 'TELEFONO',
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

export {UserSignupModel, options}