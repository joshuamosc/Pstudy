import { useGetLocalStorage } from "./hooks/useGetLocalStorage"

import { Content } from "./components/Content"
import { Header } from "./components/Header"


export const Pstudy = () => {
    
    const { storage } = useGetLocalStorage();

    return (
        <>
            <Header storage={storage}/>
            <Content storage={storage}/>
        </>
    )
}