import React from 'react'
import { StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'
import {View, Text} from 'react-native-animatable'

const Info = props => {

  let priceInput = null
  let iconStatus = null

  if(props.showInputPrice) {
    priceInput = (
      <View animation="fadeInRight">
        <TextInput style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#9a73ef"
          onChangeText={(val) => props.updateInputState('kilos', val)}/>
      </View>)
    iconStatus = <Icon name={`md-remove`} size={22}/>
  } else {
    priceInput = <Text animation="fadeInRight">{props.name}</Text>
    iconStatus = <Icon name={`md-add`} size={22}/>
  }

  return (
    <View style={styles.content}>

      <View style={styles.generalContent}>
        <View style={styles.container}>
          
          <TouchableOpacity style={styles.iconContent}>
            <Icon name={props.iconName} size={22} color="#ffffff"/>
          </TouchableOpacity>

          <View style={{width : 60, alignItems:'center'}}>
            {priceInput}
          </View>

          <TouchableOpacity onPress={props.showTextInputPrice}>
            {iconStatus}
          </TouchableOpacity>

        </View>
        
        <Collapsible style={styles.collapsible} collapsed={true}>
          <TextInput underlineColorAndroid={"white"} style={styles.input} placeholder={props.messageInput}/>
        </Collapsible>
      </View>

    </View> 
  )
}

const styles = StyleSheet.create({

  collapsible : {
    justifyContent : 'center',
    alignItems : 'center'
  },

  input : {
    margin: 15,
    height: 40,
    width:80,
    textAlign : 'center',
    backgroundColor:'rgba(0,0,0,0.20)',
    borderColor:'rgba(0,0,0,0.20)',
    borderBottomWidth: 2
  },

  generalContent : {
    width : '100%',
    height : 50,
  },

  content : {
    width : '90%',
    height : 50,
    flexDirection:'row',
    margin: 5,
    flexDirection: 'row',
    justifyContent : 'space-between',
    backgroundColor : "#A5B7BD",
    elevation : 5,
  },

  container : {
    flex:1,
    flexDirection : 'row',
    justifyContent :'space-around',
    alignItems: 'center',
  },

  iconContent : {
    borderRadius: 100,
    width : 25,
    height : 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#4285F4'
  }
})

export default Info