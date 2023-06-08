import { useEffect, useState } from "react"

export const useGetLocalStorage = () => {

    const [ storage, setStorage ] = useState({})

    useEffect( () => {

        if ( localStorage.length < 6 ) {
            localStorage.setItem('hoursToday', 0)
            localStorage.setItem('totalHours', 0)
            localStorage.setItem('spotifyToken', 0)
            localStorage.setItem('set', '25:00')
            localStorage.setItem('shortBreak', '05:00')
            localStorage.setItem('longBreak', '10:00')
        }

        setStorage({
            set: localStorage.getItem('set'),
            totalHours: localStorage.getItem('totalHours'),
            hoursToday: localStorage.getItem('hoursToday'),
            spotifyToken: localStorage.getItem('spotiyToken'),
            shortBreak: localStorage.getItem('shortBreak'),
            longBreak: localStorage.getItem('longBreak')
        }) // revisars luego loop infinito sin useEffect
    }, [])

    return storage
}