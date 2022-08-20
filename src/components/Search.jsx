import { useState } from "react"
import { Container, Form } from "react-bootstrap"
// import { useNavigate } from "react-router-dom"
// import { useFetchAllCharacters } from "../hooks/useFetchAllCharacters"

export const Search = ({ onNewCharacter }) => {

    const [inputValue, setInputValue] = useState('')
    // const { personajes } = useFetchAllCharacters()
    // const navigate = useNavigate()

    const onInputChange = ({ target }) => {
        setInputValue(target.value.charAt(0).toUpperCase() + target.value.slice(1)) //Para capitalizar la primera letra del input
    }

    // const validateName = (inputValue) => {
    //     personajes.map((data) => {
    //         if (data.nombre.includes(inputValue)) {
    //             const valor = data.nombre.toLowerCase()
    //             if (inputValue == valor) {
    //                 return valor
    //             }
    //         } else {
    //             navigate("/error")
    //         }
    //     })
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCharacter(inputValue.trim())
        setInputValue('')
    }

    return (
        <Container className="d-flex justify-content-center">
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

        </Container>
    )
}
