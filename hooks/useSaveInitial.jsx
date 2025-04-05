
const useSaveInitial = ({ initial, setInitial, setEditInitial, setCount }) => {

    const saveInitial = () => {
        initial &&
            setCount(Number(initial))
            setEditInitial(false)
            setInitial('')
    }

    return saveInitial

}

export default useSaveInitial