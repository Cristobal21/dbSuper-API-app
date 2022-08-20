import { Container, Row } from "react-bootstrap"
import { useFetchAllCharacters } from "../hooks/useFetchAllCharacters"
import { AngelDetail } from "./AngelDetail"
import './css/styles.css'

export const Angels = () => {

    const { personajes } = useFetchAllCharacters()
    
    return (
        <Container >
            <Row xs="auto" className="title-pj">
                <h1 className="mt-4 mb-4">Listado de Ángeles</h1>
            </Row>
            <Row xs="auto" md={2} lg={3} xl={4}>
                {
                    personajes.map(data => (
                        <AngelDetail
                            key={data.id}
                            {...data}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
