import { createStore, combineReducers } from 'redux'
// createStore e combineReducers são function do redux
// redux é um function
import numerosReducer from './reducer/numerosReducer'

const reducers = combineReducers({    /* isso é um reducer */
    numeros: numerosReducer
})

function storeConfig() {
    return createStore(reducers)
    //aqui está sendo passado para createStore o parametro
    //reducers criado acima que tem uma function dentro
}

export default storeConfig