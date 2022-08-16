import { useEffect, useState } from "react"
import { getAllData } from "../helpers/getAllData"



export const useFetchAllCharacters = () => {

    const [personajes, setPersonajes] = useState([])

    const getPJ = async () => {
        const newPj = await getAllData()
        setPersonajes( newPj )
    }

    useEffect(() => {
        getPJ()
    }, [])

    return {
        personajes
    }

}