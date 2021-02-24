import { createStore, combineReducers } from 'redux'
// createStore e combineReducers são function do redux
// redux é um function

const reducers = combineReducers({    /* isso é um reducer */
    numeros: function (state, action) {
        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }
    },
    nomes: function (state, action) {    /* isso é outro reducer */
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