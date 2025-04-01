import { useState, useRef, useEffect } from 'react'

import './App.css'

const App = () => {

  const [count, setCount] = useState(
    Number(localStorage.getItem('valor')) ?? 0
  )
  const [initial, setInitial] = useState('')



  useEffect(() => {
    localStorage.setItem('valor', count)
  }, [count])


  const inputInitial = useRef()

  let strCount = count.toString()

  let countArray = strCount.split('')

  console.log(countArray)

  return (
    <>
      <h2>Contador Numérico</h2>

      <div className="display">

        {countArray.length === 5 &&
          <span className="digit">
            {
              countArray.length >= 5
                ? countArray[0]
                : '0'
            }
          </span>
        }

        <span className="digit">
          {
            countArray.length >= 4
              ? countArray[countArray.length - 4]
              : '0'
          }
        </span>

        <span className="digit">
          {
            countArray.length >= 3
              ? countArray[countArray.length - 3]
              : '0'
          }
        </span>
        <span className="digit">
          {
            countArray.length >= 2
              ? (countArray[countArray.length - 2])
              : ('0')
          }
        </span>
        <span className="digit">
          {countArray[countArray.length - 1]}
        </span>
      </div>

      {countArray.length > 5 && <p onClick={() => setCount(0)}>Over 6 digits! <br /><br />Click to Reset</p>}


      <div className="card">

        <button className='minus' onClick={() => setCount(c => c - 1)}> -
        </button>
        <button className='reset' onClick={() => setCount(0)}> Reset
        </button>
        <button className='plus' onClick={() => {
          setCount(c => c + 1)
          countArray.length >= 6 && setCount(0)
        }}> +
        </button>

      </div>

      <hr />

      <h3>
        Opções
      </h3>

      <input
        type="number"
        value={initial}
        ref={inputInitial}
        onChange={(e) => setInitial(e.target.value)}
        placeholder='Definir valor inicial'
        required
      />

      <p />
      <button className='define'
        onClick={() => {
          inputInitial.current.value != '' &&
            setCount(Number(initial))
          setInitial('')
          inputInitial.current.focus()
        }}

        style={{ marginLeft: '12px' }}

      > Define
      </button>

      <hr />

      <p className="instructions">
        * Contagem máxima 99999 <br />
        ** Após atingir o limte máximo o contador é reiniciado <br />
        *** Registro salvo no navegador.
      </p>



    </>
  )
}


export default App
