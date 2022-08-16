import { Col, Container, Row } from "react-bootstrap"
import { useFetchAllCharacters } from "../hooks/useFetchAllCharacters"
import { Character } from "./Character"
import './css/styles.css'

export const AllCharacters = () => {

    const { personajes } = useFetchAllCharacters()
  return (
        <Container >
            <Row xs="auto" className="title-pj">
                <h1 className="mt-4 mb-4">Listado de Personajes</h1>
            </Row>
            <Row xs="auto" md={2} lg={3} xl={4}>
                {
                    personajes.map( data => (
                        <Character 
                            key={ data.id }
                            { ...data }
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
