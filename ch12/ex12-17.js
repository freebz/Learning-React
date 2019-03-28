import storeFactory from '../store'
import initialState from '../../data/initialState.json'

const serverStore = storeFactory(true, initialState)
