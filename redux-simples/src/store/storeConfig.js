import { createStore, combineReducers } from 'redux'
// createStore e combineReducers são function do redux
// redux é um function

const reducers = combineReducers({
    numeros: function(state, action) {
        // console.log(state, ' ', action)
        return {
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action) {
        // console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
    //aqui está sendo passado para createStore o parametro
    //reducers criado acima que tem uma function dentro
}

export default storeConfig