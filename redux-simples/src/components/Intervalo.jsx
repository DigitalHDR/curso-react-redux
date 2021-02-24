import './Intervalo.css'
import Card from './Card'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <Card title='Intervalo de Números' Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>
        </Card>
    )
}
