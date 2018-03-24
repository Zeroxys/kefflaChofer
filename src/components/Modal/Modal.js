import React from 'react'
import {View,TouchableOpacity, Text, Modal, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ModalTicket = props => {
  
  const purshase = () => {
    alert('Producto Comprado')
  }

  return (
    <Modal 
      onRequestClose={props.closeModal}
      visible={props.closeModal}
      animationType="slide"
      transparent={true}>

      <View style={styles.content}>

        <View style={styles.information}>

          <View>
            <TouchableOpacity style={styles.buttonClose} onPress={props.closeModal}>
              <Icon size={30} name="ios-close-circle-outline" color="#ffffff"/>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Cliente:</Text>
            <Text style={styles.bold}>Nombre del Cliente que pedio el servicio</Text>
          </View>

          <View>
            <Text>Dirección:</Text>
            <Text style={styles.bold}>Dirección donde se llevara el pedido</Text>
          </View>

          <View>
            <Text>Kilos:</Text>
            <Text style={styles.bold}>10 Kg</Text>
          </View>

          <View>
            <Text>Cantidad:</Text>
            <Text style={styles.bold}>$100.00</Text>
          </View>

          <View>
            <Text>Telefono del despachador:</Text>
            <Text style={styles.bold}>99 99 99 99 99</Text>
          </View>

          <View>
            <Text>Nombre del despachador:</Text>
            <Text style={styles.bold}>Nombre del despachador</Text>
          </View>
          
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonPurchase}>
              <Text style={{color : 'white', textAlign : 'center'}}><Icon size={15} name="ios-cart" color="#ffffff"/> Realizar Pedido</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content  : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },

  information : {
    width : '90%',
    height : '80%',
    justifyContent : 'space-around',
    paddingLeft: 10,
    borderRadius : 4,
    backgroundColor : '#eee',
    elevation : 10,
  },

  bold : {
    color : 'black'
  },

  buttonPurchase : {
    backgroundColor : '#2A56C6',
    width : '40%',
    height : 40,
    justifyContent : 'center',
    alignItems : 'center',
  },

  buttonClose : {
    borderRadius : 100,
    backgroundColor : '#ef5350',
    width : 50,
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    elevation : 1,
  }
})

export default ModalTicket
