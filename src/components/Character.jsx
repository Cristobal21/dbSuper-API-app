import { Accordion, Card, Col, Container, Row } from "react-bootstrap"

export const Character = ({ id, nombre, img, origen, rol, especie, estado, transformacion, universo }) => {

    return (
        <Container>
            <Row>
                <Col className="col-characters">
                    <Card className="mb-5" border="secondary" text="secondary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ img } className="img-styles img-thumbnail" />
                        <Accordion >
                            <Accordion.Item eventKey="0" className="accordion-characters">
                                <Accordion.Header>
                                    <Card.Title>{nombre}</Card.Title>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card.Body>
                                        <Card.Text>{`Especie: ${ especie }`}</Card.Text>
                                        <Card.Text>{`Estado: ${ estado }`}</Card.Text>
                                        <Card.Text>{`Planeta de Origen: ${ origen }`}</Card.Text>
                                        <Card.Text>{`Rol: ${ rol }`}</Card.Text>
                                        <Card.Text>Transformación: {(!transformacion) ? 'Desconocido' : transformacion}</Card.Text>
                                        <Card.Text>{`Universo: ${ universo }`}</Card.Text>
                                    </Card.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
