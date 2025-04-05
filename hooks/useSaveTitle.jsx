
const useSaveTitle = ({setTitulo, title, setTitle, setEditTitle}) => {

    const saveTitle = () => {
        title &&
            setTitulo(title)
            setEditTitle(false)
            setTitle('')
    }

    return saveTitle

}

export default useSaveTitle