import { Container, Row } from "react-bootstrap"
import { useFetchAllCharacters } from "../hooks/useFetchAllCharacters"
import { GodDetail } from "./GodDetail"
import './css/styles.css'

export const Gods = () => {

    const { personajes } = useFetchAllCharacters()
    
    return (
        <Container >
            <Row xs="auto" className="title-pj">
                <h1 className="mt-4 mb-4">Listado de Dioses</h1>
            </Row>
            <Row xs="auto" md={2} lg={3} xl={4}>
                {
                    personajes.map(data => (
                        <GodDetail
                            key={data.id}
                            {...data}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
