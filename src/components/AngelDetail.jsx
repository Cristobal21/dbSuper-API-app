import { useRef, useState } from "react"
import { Card, Col, Container, Row, Overlay, Popover } from "react-bootstrap"
import { ModalAngel } from "./ModalAngel"



export const AngelDetail = ({ id, nombre, img, origen, rol, especie, estado, transformacion, universo }) => {

    const [modalShow, setModalShow] = useState(false)
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null)
    const ref = useRef(null)

    const handleClick = (e) => {
        setShow(!show)
        setTarget(e.target)
    }

    if ( especie === "Angel" ) {
        return (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Card className="mb-5 card-img-angel" border="secondary" text="secondary" style={{ width: '18rem' }}>
                            <Card.Img 
                                variant="top" 
                                src={ img } 
                                className="img-styles img-thumbnail"
                                onClick={() => setModalShow(true)}
                            />
                            <Card.Header 
                                className="text-center card-header"
                                onClick={handleClick}
                            >
                                <Card.Title>
                                    <h3>{nombre}</h3>
                                    <div ref={ref}>
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="top"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                            <Popover id="popover-contained" className="popover-angels">
                                                <Popover.Header as="h3">Detalle</Popover.Header>
                                                <Popover.Body>
                                                    <p>Especie: {especie}</p>
                                                    <p>Estado: {estado}</p>
                                                    <p>Origen: {origen}</p>
                                                    <p>Rol: {rol}</p>
                                                    <p>Universo: {universo}</p>
                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </div>
                                </Card.Title>
                            </Card.Header>
                            <ModalAngel 
                                show={ modalShow }
                                onHide={ () => setModalShow(false) }
                                nombre={nombre}
                                origen={origen}
                                rol={rol}
                                estado={estado}
                                transformacion={transformacion}
                                universo={universo}
                                especie={especie}
                                img={img}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
