import { useEffect, useState } from "react"

export const useChrono = ( time ) => {
    
    const divs = time.split(':', 2) //24:00
    
    divs.map( (div, i) => {
        divs[i] = parseInt(div)
    })
    
    //console.log(divs)

    
    const [ minutes, setMinutes ] = useState( divs[0] )
    const [ seconds, setSeconds ] = useState( divs[1] )
    
    useEffect( () => {
        console.log(seconds);
        if ( seconds === 0 ) {
            setSeconds(59)
            setMinutes( minutes - 1 )
        }
        const interval = setInterval( () => { 
            setSeconds( seconds - 1 )
        }, 1000 )
        return () => {
            clearInterval(interval)
        }
    }, [seconds, minutes])


        

    return [ minutes, seconds ]
}