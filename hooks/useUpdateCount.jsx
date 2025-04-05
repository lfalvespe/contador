import { useEffect } from "react"

const useUpdateCount = (count) => {

    useEffect(() => {
        localStorage.setItem('contador', count)
    }, [count])

    
}

export default useUpdateCount