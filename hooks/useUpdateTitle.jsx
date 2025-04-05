import { useEffect } from "react"

const useUpdateTitle = (titulo) => {
    useEffect(() => {
        localStorage.setItem('titulo', titulo)
    }, [titulo])
}

export default useUpdateTitle