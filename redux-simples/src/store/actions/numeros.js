// Action Creator
export function alterarNumeroMinimo(novoMumero) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoMumero,
    }
}

// Action Creator
export function alterarNumeroMaximo(novoMumero) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoMumero,
    }
}