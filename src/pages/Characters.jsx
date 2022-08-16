import { Container, Row } from "react-bootstrap"
import { AllCharacters } from "../components/AllCharacters"

export const Characters = () => {
  return (
    <Container >
        <Row>
            <AllCharacters/>
        </Row>
    </Container>
  )
}
