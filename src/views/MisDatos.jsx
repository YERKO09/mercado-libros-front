import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import avatarPlaceholder from "../assets/img/avatar-placeholder.jpg"

const MisDatos = () => {
  const imgStyle = {
    height: "200px",
    width: "200px",
    borderRadius: "50%"
  }

  return (
    <Container>
      <Row className='pt-3 mb-3 justify-content-center'>
        <Col sm={10}>
          <h2 className="mb-4">Bienvenido Usuario</h2>
          <Card>
            <Card.Body className="d-flex flex-column p-3">
              <div className="d-flex gap-3 mb-3">
                <img src={avatarPlaceholder} style={imgStyle}/>
                <div className="d-flex flex-column w-100">
                  <h5 className="fw-semibold">Datos Personales</h5>

                  <Form.Group controlId="nombreUsuario" className="flex-grow-1">
                    <Form.Label className="m-0">Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                  <Form.Group controlId="apellidoUsuario">
                    <Form.Label className="m-0">Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" />
                  </Form.Group>
                </div>
              </div>

              <div>
                <h5 className="fw-semibold">Información de contacto</h5>

                <div className="d-flex gap-2">
                  <Form.Group controlId="telefonoUsuario" className="flex-grow-1">
                    <Form.Label className="m-0">Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="+569 1234 5678" className="mb-0"/>
                  </Form.Group>
                  <Form.Group controlId="correoUsuario" className="flex-grow-1">
                    <Form.Label className="m-0">Correo</Form.Label>
                    <Form.Control type="text" placeholder="usuario@correo.cl" className="mb-0"/>
                  </Form.Group>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="justify-content-end gap-2">
              <Button variant="outline-dark">Cambiar Contraseña</Button>
              <Button variant="dark">Actualizar Datos</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MisDatos