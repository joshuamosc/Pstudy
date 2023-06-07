import { useEffect, useState } from "react"

export const useChrono = ( time ) => {
    
    const divs = time.split(':', 2)
    
    divs.map( (div, i) => {
        divs[i] = parseInt(div)
    })
    
    //console.log(divs)

    
    const [ minutes, setMinutes ] = useState( divs[0] )
    const [ seconds, setSeconds ] = useState( divs[1] )
    
    useEffect( () => {
        if ( seconds === 0 ) {
            setSeconds(59)
            console.log(seconds);
            setMinutes( minutes - 1 )
        }
        setInterval( () => { 
            console.log(seconds);
            setSeconds( seconds - 1 )
        }, 1000 )
    }, [seconds])


        

    return [ minutes, seconds ]
}