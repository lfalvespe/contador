import React from 'react'

const Redefine = ({setTitulo, setCount}) => {
    return (
        <>
            <h5 id='redefine-btn' onClick={() => {
                setCount(0)
                setTitulo('Contador Numérico')
            }}>
                {'>> REDEFINIR <<'}
                <br /><span className='action-icon' style={{ fontSize: '2.5em', lineHeight: '15px' }}>♾️</span>
            </h5>
        </>
    )
}

export default Redefine