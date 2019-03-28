store.dispatch(connectToMessageSocket())


import io from 'socket.io-client'

const connectToChatSocket = () => dispatch => {

  dispatch({type: "CONNECTING"})

  let socket = io('/message-socket')

  socket.on('connect', () =>
    dispatch({type: "CONNECTED", id: socket.id})
  )

  socket.on('message', (message, user) =>
    dispatch({type: "NEW_MESSAGE", message, user})
  )
}

export default connectToMessageSocket
