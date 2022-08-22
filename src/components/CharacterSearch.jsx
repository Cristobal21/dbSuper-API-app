import { useState } from "react"
import { Button, Card, Col, Container, Fade, Row } from "react-bootstrap"
import { useFetchCharacterByName } from "../hooks/useFetchCharacterByName"

export const CharacterSearch = ({ name }) => {

    const { character } = useFetchCharacterByName(name)
    const [ open, setOpen ] = useState(false)


    const {
        especie,
        estado,
        id,
        img,
        nombre,
        origen,
        rol,
        transformacion,
        universo,
    } = character

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={10} lg={8} className="d-flex justify-content-center">
                    <Card className="mb-3 card-img" border="secondary" text="secondary">
                        <Card.Img variant="top" src={img} />
                        <Card.Header className="text-center">
                            <Card.Title>
                                <h3>{nombre}</h3>
                            </Card.Title>
                        </Card.Header>
                    </Card>
                </Col>
 
                <Col xs={12} md={8} lg={4}>
                    <Container className="mb-3 container-button d-flex justify-content-center" >
                            <Button
                                aria-controls="card-character"
                                aria-expanded={open}
                                className="button-info"
                                onClick={() => setOpen(!open)}
                                variant="outline-success"
                                size="lg"
                            >
                                Ver info
                            </Button>
                    </Container>
                    <Fade in={open}>
                        <div id="card-character" className="mb-3">
                            <Card className="card-search" border="secondary">
                                <Card.Header>
                                    <Card.Title>
                                        { nombre }
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>Especie:        {(!especie) ? 'Sin Información' : especie}</Card.Text>
                                    <Card.Text>Estado:         {(!estado) ? 'Sin Información' : estado}</Card.Text>
                                    <Card.Text>Origen :        {(!origen) ? 'Sin Información' : origen}</Card.Text>
                                    <Card.Text>Rol:            {(!rol) ? 'Sin Información' : rol}</Card.Text>
                                    <Card.Text>Transformación: {(!transformacion) ? 'Sin Información' : transformacion}</Card.Text>
                                    <Card.Text>Universo:       {(!universo) ? 'Sin Información' : universo}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}