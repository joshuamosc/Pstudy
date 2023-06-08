import { useGetLocalStorage } from "./hooks/useGetLocalStorage"

import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { useStorage } from "./hooks/useStorage";


export const Pstudy = () => {
    
    const { storage } = useStorage();

    console.log(storage);

    return (
        <>
            <Header storage={storage}/>
            <Content storage={storage}/>
        </>
    )
}