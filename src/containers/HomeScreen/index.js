import React, {Component} from 'react'
import {StyleSheet,Text, View, Image, Dimensions, NetInfo, AsyncStorage} from 'react-native'
import SideMenu from 'react-native-side-menu'

import MapContent from '../../components/Map/MapContent'
import validate from '../../utils/validation'

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
    this.setState({
      showSlideMenu : !this.state.showSlideMenu
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

    let watchId = navigator.geolocation.watchPosition( pos => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude

      let lastRegion = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
          }
        }
      }


      this.locationHandler(lastRegion)
      
    })

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
      if(error_handler) alert('get current position failed')
    },
    {
      enableHighAccuracy:true,
      timeout:2000,
    })

    this._getWatchPosition()

  }

  locationHandler = event => {
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

  fetchStorage = async () => {
    let source = await AsyncStorage.getItem('@MySuperStore:key')
    try {
      this.setState( prevState => {
        return {
          facebookManager : prevState.facebookManager = source
        }
      })
    } catch (e) {
      return e
    }
  }

  componentDidMount () {
    this.fetchStorage()
    this.getCurrentPosition()
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(watchId)
  }

  render () {
    console.warn(this.state.facebookManager)
    const menu = (
      <View style={style.content}>
        <View style={style.header}>
          <Image
            style={{width: 50, height: 50}}
            source={ { /*uri: this.state.facebookManager.picture.data.url */} }
          />
          <View style={style.profileData}>
            <Text style={{color : 'white'}}>
              Bienvenido
            </Text>
            <Text style={{color : 'white'}}>
              {/*this.state.facebookManager.name*/}
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
      <SideMenu menu={menu} isOpen={this.state.showSlideMenu}>
        <MapContent
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