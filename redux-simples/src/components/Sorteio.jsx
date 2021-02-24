import React from 'react'
import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <Card title='Sorteio de um Números' Purple>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}
