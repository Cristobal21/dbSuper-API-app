import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap"

export const ModalAngel = (props) => {

    const {
        nombre,
        origen,
        rol,
        estado,
        transformacion,
        universo,
        especie,
        img,
    } = props

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="modal-title-angel">
                <Modal.Title id="contained-modal-title-vcenter">
                    <Container>
                        <Row>
                            <h3 className="nombre-title-modal">{ nombre }</h3>
                        </Row>
                    </Container>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={10} md={6} lg={6}>
                        <Card className="card-modal">
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
                    <Col xs={10} md={6} lg={6}>
                        <Card className="card-modal">
                            <Card.Img 
                                className="img-thumbnail img-modal"
                                variant="bottom" 
                                src={ img }
                            />
                        </Card>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size="lg" onClick={props.onHide}>Atras</Button>
            </Modal.Footer>
        </Modal>
    )
}

{/* <p>Especie: {especie}</p>
<p>Estado: {estado}</p>
<p>Planeta de origen: {origen}</p>
<p>Rol: {rol}</p>
<p>Transformacion: {transformacion}</p>
<p>Universo: {universo}</p> */}
