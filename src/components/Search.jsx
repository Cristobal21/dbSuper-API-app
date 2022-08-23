import { useState } from "react"
import { Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useFetchAllCharacters } from "../hooks/useFetchAllCharacters"
// import { useFetchCharacterByName } from "../hooks/useFetchCharacterByName"

export const Search = ({ onNewCharacter }) => {

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const { personajes } = useFetchAllCharacters()
    const pjNombres = personajes.map( data => data.nombre )
    // const { character } = useFetchCharacterByName( pjNombres )


    const onInputChange = ({ target }) => {
        //Para capitalizar la primera letra del input
        const palabra = target.value.charAt(0).toUpperCase() + target.value.toLowerCase().slice(1)
        setInputValue(palabra)
    }


    const validateName = (inputValue) => {
        
        if (!pjNombres.includes(inputValue)) {
            navigate("/error")
        }
    }

    


    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCharacter(inputValue.trim())
        setInputValue('')
        validateName(inputValue)
    }


    return (
        <Container className="d-flex justify-content-center mb-5" >
            <Row>
                <Form onSubmit={onSubmit} aria-label="form" className="mt-5 form-input">
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Busca un personaje"
                            value={inputValue}
                            onChange={onInputChange}
                            size="lg"
                        />
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}
