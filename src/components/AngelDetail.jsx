import { Card, Col, Container, Row } from "react-bootstrap"

export const AngelDetail = ({ id, nombre, img, origen, rol, especie, estado, transformacion, universo }) => {

    if ( especie === "Angel" ) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="mb-5" border="secondary" text="secondary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ img } className="img-styles img-thumbnail" />
                            <Card.Header className="text-center">
                                <Card.Title>
                                    <h3>{ nombre }</h3>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>{`Especie: ${ especie }`}</Card.Text>
                                <Card.Text>{`Estado: ${ estado }`}</Card.Text>
                                <Card.Text>{`Planeta de Origen: ${ origen }`}</Card.Text>
                                <Card.Text>{`Rol: ${ rol }`}</Card.Text>
                                <Card.Text>Transformación: {(!transformacion) ? 'Desconocido' : transformacion}</Card.Text>
                                <Card.Text>{`Universo: ${ universo }`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
