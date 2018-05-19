import react from 'react'
import {Text, View, StyleSheet} from 'react-native'

const style = StyleSheet.create({
  Content : {
    backgroundColor: 'red'
  }
})

const Slide = (props) => {
  return  (
  <View style={style.Content}>
    <Image
      style={{width: 50, height: 50}}
      source={ { uri: props.profilePicture } }
    />
    <Text>
      Bienvenido {props.profileName}
    </Text>
    <Text>
      OPCION 2
    </Text>
  </View>)  
}

export default Slide
