import { useEffect, useState } from "react"
import { getCharacterByName } from "../helpers/getCharacterByName"



export const useFetchCharacterByName = ( name ) => {
  
    const [character, setCharacter] = useState([])

    const getCharacter = async () => {
        const newCharacter = await getCharacterByName( name )
        setCharacter( newCharacter )
    }

    useEffect(() => {
      
        getCharacter()
    
    }, [])


    return {
        character
    }

}
