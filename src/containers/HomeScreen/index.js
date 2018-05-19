import React, {Component} from 'react'
import {StyleSheet,Text, View, Image, Dimensions, NetInfo} from 'react-native'
import SideMenu from 'react-native-side-menu'

import MapContent from '../../components/Map/MapContent'
import ModalTicket from '../../components/Modal/Modal'

import validate from '../../utils/validation'
const {width, height} = Dimensions.get('window')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  getNetInfo = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      console.warn(isConnected)
    }).catch( error => {
      console.warn(error)
    });


  }

  componentDidMount () {
    this.getCurrentPosition()
    this.getNetInfo()
  }


  componentWillUnmount () {
    navigator.geolocation.clearWatch(watchId)
  }

  render () {

    console.warn(this.props.facebookManager.picture.data.url)

    const menu = (
      <View >
        <Image
          style={{width: 50, height: 50}}
          source={ { uri: this.props.facebookManager.picture.data.url } }
        />
        <Text>
          Bienvenido {this.props.facebookManager.name}
        </Text>
        <Text>
          OPCION 2
        </Text>
      </View>)

    return (
      <SideMenu menu={menu}>
        <MapContent
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