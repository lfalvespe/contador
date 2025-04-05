
const Options = ({ title, setTitle, inputTitleRef, editTitle, setEditTitle, saveTitle }) => {
    return (
       <>
           
            {
                <div onClick={() => {
                    setEditTitle(true)
                    setTimeout(() => {
                        inputTitleRef.current.focus()
                    }, 100)
                }}>
                    <h5 id='edit-title-btn'>
                        {'>>'} TÍTULO {'<<'} <br /><span className="action-icon" style={{ fontSize: '1.5em' }}>🅰️🆎🅱️</span>
                    </h5>
                </div>
            }
            {
                editTitle &&
                <>
                    <div className="edit-title-container">
                        <input
                            className='input-title'
                            type="text"
                            value={title}
                            ref={inputTitleRef}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Digite um título'
                            required
                        />
                        <input className='action-icon' type='button' value='✅ Save' onClick={saveTitle} />
                        <input 
                            className='action-icon' 
                            type='button' 
                            value='⛔Cancel' 
                            onClick={() => {
                                setEditTitle(false)
                                setTitle('')
                            }}  
                        />
                    </div>
                </>
            }
        </>
    )
}

export default Options