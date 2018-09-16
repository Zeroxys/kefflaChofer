import React, {Component} from 'react'
import {StyleSheet,Text, View, Image, Dimensions, NetInfo, AsyncStorage} from 'react-native'
import SideMenu from 'react-native-side-menu'

import MapContent from '../../components/Map/MapContent'
import validate from '../../utils/validation'
import OpenSocket from 'socket.io-client'

//import socketConnection from '../../socket/connection'

const socket = OpenSocket('http://178.128.70.168:8001')

const {width, height} = Dimensions.get('window')
const style = StyleSheet.create({
  content : {
    flex: 1,
    backgroundColor : '#eeeeee',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
  },

  header : {
    width : '100%',
    height : '25%',
    flexDirection : 'row',
    display : 'flex',
    backgroundColor : '#757575',
    justifyContent : 'space-around',
    alignItems : 'center',
  },

  profileData : {
    marginRight : 30,
    justifyContent : 'center',
    display : 'flex',
    alignItems : 'center'
  },

  block : {
    height : '70%',
    width : 200,
    justifyContent : 'center',
    justifyContent : 'space-around',
  },

  mainContent : {
    flex: 1,
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    flexDirection : 'column',
    display : 'flex',
  }
})

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

      userName : null,
      picturePicture : null,
      userPhone : null,

      customerData : {lat: 0, lng: 0},

      facebookManager : {},
      showSlideMenu : false,
      currentLocation : {
        latitude : 17.989456,
        longitude : -92.947506,
        latitudeDelta : 0.0122,
        longitudeDelta : width / height * 0.0122
      },
  
      controls : {
  
        kilos : {
          value : "",
          valid :  false,
          validationRules : {
            isNumber:true
          }
        },
  
        cantidad : {
          value : "",
          valid :  false,
          validationRules : {
            isNumberInt : true
          }
        }
      },
  
      expand : true,
      marker : false,
      visible : false,
      showInputPrice : false,
  
      visibleModal : false
    }
  }

  _showSlideMenu = () => {
    console.warn(this.state.showSlideMenu)
    this.setState( prevState => {
      return {
        showSlideMenu :  prevState = true
      }
    })
  }


  _updateInputState = (key, value) => {
    this.setState( prevState => {
      return {
        controls : {
          ...prevState.controls,
          [key] : {
            ...prevState.controls[key],
            value: validate(value, prevState.controls[key].validationRules)
          }
        }
      }
    })
  }

  _closeModal = () =>  {
    this.setState((prevState) => {
      return {
        closeModal : !prevState.visibleModal
      }
    })
  }

  _openModal = () => {
    this.setState( prevState => {
      return  {
        visible : !prevState.visibleModal
      }
    })

  }

  showTextInputPrice = () => {
    this.setState( (prevState) => {
      return {
        showInputPrice : !prevState.showInputPrice
      }
    })
  }


  toggle = () => {
    this.setState( prevState => {
      return {
        expand : !prevState.expand
      }
    })

  }

  // watcher que vigilara la posicion actual
  // y cambiara el marker
  _getWatchPosition = () => {
    
    this.watchId = navigator.geolocation.watchPosition( (pos) => {
      console.warn('----> position', pos.coords)
      let lastRegion = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
          }
        }
      }
      this.locationHandler(lastRegion)
    },(error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: false, maximumAge:1, distanceFilter: 1 })
    console.warn('WatcherId--->', this.watchId)
    }

  // Obtenemos la posicion actual
  getCurrentPosition = (event) => {
    navigator.geolocation.getCurrentPosition( pos => {
      
      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
          }
        }
      }
      this.locationHandler(coordsEvent)
    }, error_handler => {
      if(error_handler) alert('Fallo el obtener tu posicion, asegurate de tener el gps activado')
    })
  }

  locationHandler = event => {
    console.log('entramos al manejador de locaciones')
    let coords = event.nativeEvent.coordinate

    this.map.animateToRegion({
      ...this.state.currentLocation,
      latitude :  coords.latitude,
      longitude : coords.longitude
    })

    this.setState(prevState => {
      return {
        currentLocation : {
          ...prevState.currentLocation,
          latitude : coords.latitude,
          longitude : coords.longitude
        },
        marker : true
      }
    })
  }

  async getUserLogin () {

    try {
      let fbUser  = JSON.parse(await AsyncStorage.getItem('fb_token'))
      let mailUser = JSON.parse(await AsyncStorage.getItem('user_token'))
      console.warn('Usuario de cache ---->', mailUser.data)
      
      if( fbUser) {
        this.setState(prevState => {
          return {
            userName : prevState.userManager = fbUser.name,
            userPicture : prevState.userPicture = fbUser.picture.data.url,
          }
        })
      }if(mailUser){
        this.setState(prevState => {
          return {
            userName : prevState.userManager = mailUser.data.loginResult.name,
            userId : prevState.userManager = mailUser.data.loginResult._id,
            userPhone : prevState.userManager = mailUser.data.loginResult.phone,
            userPicture : prevState.userPicture = 'http://clipground.com/images/profile-clipart-2.png'
          }
        })
      }

    } catch (error) {
      console.warn(error)
    } 
  }

  componentDidMount () {
    this.getUserLogin()
    this.getCurrentPosition()
    this._getWatchPosition()

    //socketConnection()

    socket.on('connection')

    socket.on('selectSeller', (response) => {
      const retorna = response

      if(retorna[0].id === this.state.userId){

        console.warn(retorna[1])

        this.setState( prevState => {
          return {
            customerData : prevState.customerData = {...retorna[1]}
          }
        })

        retorna[1].costumer = false
        console.warn('este es el join que envío desde seller ', retorna)
        socket.emit('join', retorna, function (err) {
          if(err) {
            alert(err)
          }else{
            console.warn('Se ha agregado como vendedor un vendedor muy chido')
          }
        })

      }
      else{
        console.warn('Se ha seleccionado a otro vendedor')
      }
     })
     
     socket.on('tunel', (get_seller_costumer) => {
      console.warn('Mi costumer es',  JSON.stringify(get_seller_costumer))
     
      setInterval(() => {
        socket.emit('tunel', {lat: this.state.currentLocation.latitude, lng: this.state.currentLocation.longitude}, () => {})
      }, 5000)
     })

    /*socket.emit('createOrder', {
      lat: '17.99740963',
      lng: '-92.9406558',
      quantity: '40',
      idProducto: '5b3bfb3eaec2945dc9d17a90',
      idCostumer: '5b440136aec2945dc9d17a92',
    } )*/

  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    const menu = (
      <View style={style.content}>
        <View style={style.header}>
          <Image
            style={{width: 50, height: 50}}
            source={ { uri: this.state.userPicture} }
          />
          <View style={style.profileData}>
            <Text style={{color : 'white'}}>
              Bienvenido
            </Text>
            <Text style={{color : 'white'}}>
              {this.state.userName}
            </Text>
          </View>
        </View>
        <View style={style.mainContent}>
          <View style={style.block}>
            <Text>
              Ruta
            </Text>

            <Text>
              Configuración
            </Text>

            <Text>
              Ayuda
            </Text>

            <Text>
              Legal
            </Text>

            <Text>
              Cerrar Sesion
            </Text>
          </View>
        </View>
      </View>)

    return (
      <SideMenu menu={menu} 
        isOpen={false}
        autoClosing={false}
        disableGestures={true}>
        <MapContent
          userName = {this.state.userName}
          userPhone = {this.state.userPhone}
          customerData={this.state.customerData}

          showSlideMenu={this._showSlideMenu}
          marker = {this.state.marker}
          initialRegion = {this.state.currentLocation}
          OnPress = {this.locationHandler}
          Ref = {ref => this.map = ref}
          toggle = {this.toggle}
          expand = {this.state.expand}
          openModal = {this.openModal}
          getCurrentPosition = {this.getCurrentPosition}
          showOptions = {this.showOptions}

          showTextInputPrice = {this.showTextInputPrice}
          showInputPrice = {this.state.showInputPrice}
          
          kilosValue={this.state.controls.kilos.value}
          cantidadValue={this.state.controls.cantidad.value}
          updateInputState = {this._updateInputState}
          />
      </SideMenu>
    )
  }
}

export default HomeScreen