import { useEffect, useState } from "react"

export const useGetLocalStorage = () => {

    const [ storage, setStorage ] = useState({})

    if ( localStorage.length < 6 ) {
        localStorage.setItem('hoursToday', 0)
        localStorage.setItem('totalHours', 0)
        localStorage.setItem('spotifyToken', 0)
        localStorage.setItem('set', '25:00')
        localStorage.setItem('shortBreak', '05:00')
        localStorage.setItem('longBreak', '10:00')
    }

    useEffect( () => {
        setStorage(localStorage) // revisars luego loop infinito sin useEffect
    }, [])

    return {
        storage
    }
}