import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
//connect = conecta o estado do componente a aplicação
//conecte pra devolver um componente que tem a ligação 
//com o estado geral da minha aplicação no estado global

// eslint-disable-next-line import/no-anonymous-default-export

const Media = (props) => {
// function Media(props) { ----- esse é igual o de cima, o cima arrow function
    console.log(props.min)
    console.log(props.max)
    const { min, max } = props

    return (
        <Card title='Média dos Números' Green>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
// function mapStateToProps(state) {-----
//nome da function pode ser qualquer coisa mais o padrão é mapStateToProps
    return{
        // numeros: state.numeros-----
        //aqui nesse primeiro nome pode ser qualquer coisa não faz diferença
        //mais lembre se de colocar o mesmo nome onde for ultilizalo depois

        min: state.numeros.min,
        max: state.numeros.max
        //esse é igual o de cima porem separados
    }
}

export default connect(mapStateToProps)(Media)