import { useState } from "react"
import { Alert, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export const ErrorMessage = () => {

    const navigate = useNavigate()


    return (
        <Container className="mt-5">
            <Alert variant="danger" >
                <Alert.Heading style={{ textAlign: "center"}}>Error en la búsqueda!</Alert.Heading>
                <p>Nombre no encontrado en la base de datos</p>
                <p>Estás seguro de haber escrito el nombre correcto ?</p>
                <p>Porqué no regresas para intentarlo denuevo?</p>
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
