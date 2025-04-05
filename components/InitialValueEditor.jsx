import React from 'react'

const InitialValueEditor = ({initial, setInitial, editInitial, setEditInitial, inputInitialRef, saveInitial}) => {
    return (
        <>
            <h5 id='edit-initial-btn'
                onClick={() => {
                    setEditInitial(true)
                    setInterval(() => {
                        inputInitialRef.current.focus()
                    }, 100)
                }
                }
            > {'>>'} VALOR INICIAL {'<<'}<br /><span className='action-icon' style={{ fontSize: '1.5em' }}> 0️⃣1️⃣2️⃣</span>
            </h5>
            {editInitial &&
                <div className='edit-initial-container'>
                    <input
                        className='input-initial'
                        type="number"
                        value={initial}
                        ref={inputInitialRef}
                        onChange={(e) => setInitial(e.target.value)}
                        placeholder='Definir valor inicial'
                        required
                    />
                    <input className='action-icon' type='button' id='save-initial' onClick={saveInitial} value='✅ Save' />
                    <input 
                        className='action-icon' 
                        type='button' 
                        id='save-initial' 
                        onClick={() => {
                            setEditInitial(false)
                            setInitial('')
                        }}  
                        value='⛔Cancel'
                    />
                </div>
            }
        </>
    )
}

export default InitialValueEditor