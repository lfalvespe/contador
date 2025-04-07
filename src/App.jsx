import { useState, useRef} from 'react'

// Custom Hooks
import useSaveTitle from '../hooks/useSaveTitle'
import useSaveInitial from '../hooks/useSaveInitial'
import useUpdateTitle from '../hooks/useUpdateTitle'
import useUpdateCount from '../hooks/useUpdateCount'

//Components
import Navbar from '../components/Navbar'
import Display from '../components/Display'
import CounterControls from '../components/CounterControls'
import TitleEditor from '../components/TitleEditor'
import InitialValueEditor from '../components/InitialValueEditor'
import Redefine from '../components/Redefine'
import Instructions from '../components/Instructions'
import Footer from '../components/Footer'

// CSS
import './App.css'

const App = () => {

  const [count, setCount] = useState(
    Number(localStorage.getItem('contador')) ?? 0
  )
  const [initial, setInitial] = useState('')
  const [editInitial, setEditInitial] = useState(false)
  let countArray = count.toString().split('')

  const [titulo, setTitulo] = useState(
    localStorage.getItem('titulo') ?? 'Contador Numérico'
  )
  const [title, setTitle] = useState('')
  const [editTitle, setEditTitle] = useState(false)

  // Refs
  const inputInitialRef = useRef()
  const inputTitleRef = useRef()

  //Update data
  const saveTitle = useSaveTitle({ setTitulo, title, setTitle, setEditTitle })
  const saveInitial = useSaveInitial({ initial, setInitial, setEditInitial, setCount })

  //Persistence 
  useUpdateCount(count)
  useUpdateTitle(titulo)

  return (
    <>
      <Navbar />
      <header>

        <h2 className='title'>{titulo}</h2>
      </header>

      <Display countArray={countArray} setCount={setCount}/>

      <CounterControls countArray={countArray} setCount={setCount} />

      <div className="options">

        <hr />

        <h3 id='options-title'>
          EDITAR
        </h3>

        <TitleEditor
          title={title}
          setTitle={setTitle}
          inputTitleRef={inputTitleRef}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          saveTitle={saveTitle}
        />
        <InitialValueEditor
          initial={initial}
          setInitial={setInitial}
          inputInitialRef={inputInitialRef}
          saveInitial={saveInitial}
          editInitial={editInitial}
          setEditInitial={setEditInitial}
        />
        <Redefine setTitulo={setTitulo} setCount={setCount} />

        <hr />
      </div>

      <Instructions />     
      <Footer />

    </>
  )
}


export default App
