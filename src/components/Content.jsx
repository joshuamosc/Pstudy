import { useState, useEffect } from 'react';
import {useGetLocalStorage} from '../hooks/useGetLocalStorage' 
import { useChrono } from '../hooks/useChrono';

export const Content = ( { storage } ) => {

    // States para las opciones
    const [ studySet, setStudySet ] = useState(true)
    const [ shortBreak, setShortBreak ] = useState(false)
    const [ longBreak, setLongBreak ] = useState(false)

    // State para controlar el play y el stop
    const [ playState, setPlayState ] = useState(false)

    // Chronometer
    //const [ time, setTime ] = useState('00:00')

    let time;
    if ( studySet ) {   
        time = localStorage.set
    } else if ( shortBreak ) {
        time = localStorage.shortBreak 
    } else if ( longBreak ) {
        time = localStorage.longBreak 
    } 

    useEffect(() => {
        console.log(localStorage.getItem('set'));
        console.log(storage)
    }, [])

    const [ minutes, seconds ] = useChrono( storage.set ) 

    const handleStudySet = () => {
        if (!studySet) {
            setStudySet(!studySet)
            setShortBreak(false)
            setLongBreak(false)
            setPlayState(false)
        }
    }

    const handleShortBreak = () => {
        if (!shortBreak) {
            setStudySet(false)
            setShortBreak(!shortBreak)
            setLongBreak(false)
            setPlayState(false)
        }
    }

    const handleLongBreak = () => {
        if (!longBreak) {
            setStudySet(false)
            setShortBreak(false)
            setLongBreak(!longBreak)
            setPlayState(false)
        }
    }

    const handlePlayState = () => {
        setPlayState(!playState)
        
    }

    return (
        <div className="content">
            <div className="timer">
                <div className="options">
                    <ul>
                        <li className={ studySet ? "optionSelected" : null } onClick={ handleStudySet } >Set</li>
                        <li className={ shortBreak ? "optionSelected" : null } onClick={ handleShortBreak }>Short Break</li>
                        <li className={ longBreak ? "optionSelected" : null } onClick={ handleLongBreak }>Long Break</li>
                    </ul>
                </div>
                <div className="clock">
                    <div className="time">
                        <h2 className={ playState ? "bold timer_green" : "bold timer_red" }> { minutes }:{ seconds } </h2>
                    </div>
                    <div className="startButton">
                        <button className={ playState ? "timer_red" : "timer_green" } onClick={ handlePlayState } >{ playState ? "Stop" : "Start" }</button>
                    </div>
                </div>
            </div>
            <div className="spotify">

            </div>
        </div>
    )
}