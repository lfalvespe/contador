import React from 'react'

const Instructions = () => {
    return (
        <p className="instructions">
            <div className='list'>
                <div className='line'><span>▫️</span> <span>Contagem máxima 99999</span></div>
                <div className='line'><span>▫️</span><span>Após atingir o limte máximo o contador é reiniciado</span></div>
                <div className='line'><span>▫️</span><span> Registro salvo no navegador.</span></div>
            </div>
        </p>
    )
}

export default Instructions