import OpenSocket from 'socket.io-client'

const socket = OpenSocket('http://178.128.70.168:8001')

export default connection = (user) => {

  console.log(user)

  socket.on('connection')

  socket.on('selectSeller', (response) => {
    const retorna = response
    if(retorna[0].id === '5b9b4385d853ca522747a682'){
      retorna[1].costumer = false
      console.warn('este es el join que envío desde seller ', retorna)
      socket.emit('join', retorna, function (err) {
        if(err) {
          alert(err)
        }else{
          console.warn('Se ha agregado como vendedor')
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
      socket.emit('tunel', {lat: '17.99740963', lng: '-92.9406558'}, () => {})
    }, 5000)
  })

}
