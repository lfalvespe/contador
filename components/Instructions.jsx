import React from 'react'

const Instructions = () => {
    return (
        <p className="instructions">
            <div className='list'>
                <div className='line'>▫️ Contagem máxima 99999</div>
                <div className='line'>▫️Após atingir o limte máximo o contador é reiniciado</div>
                <div className='line'>▫️ Registro salvo no navegador.</div>
            </div>
        </p>
    )
}

export default Instructions