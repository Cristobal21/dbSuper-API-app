import { Alert, Button, Card, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export const ErrorMessage = () => {

    const navigate = useNavigate()


    return (
        <Container className="mt-5">
            <Alert variant="danger" >
                <Card border="danger" text="danger">
                    <Card.Header>
                        <Card.Title>
                            <Alert.Heading style={{ textAlign: "center"}}>Error en la búsqueda :(</Alert.Heading>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Nombre no encontrado en la base de datos</Card.Text>
                        <Card.Text>Estás seguro de haber escrito el nombre correcto ?</Card.Text>
                        <Card.Text>Porqué no regresas para intentarlo denuevo?</Card.Text>
                    </Card.Body>
                </Card>
                <hr />
                <div className="d-flex justify-content-center">
                    <Button onClick={ () => navigate("/") } variant="outline-danger" size="lg">
                        Regresar
                    </Button>
                </div>
            </Alert>
        </Container>
    )
}
