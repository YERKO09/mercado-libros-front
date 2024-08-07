import React, { useContext, useState, useEffect } from "react";
import { LibrosContext } from "../context/LibrosContext";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

const FormActualizarPublicacion = ({ libro, onHide }) => {
  const { updateLibro, generos } = useContext(LibrosContext);

  const [libroActualizado, setLibroActualizado] = useState({
    titulo: "",
    descripcion: "",
    genero_id: "",
    precio: "",
    url_imagen: "",
  });

  useEffect(() => {
    if (libro) {
      const generoId = generos.find((g) => g.nombre === libro.genero)?.genero_id;
      setLibroActualizado({
        id: libro.libro_id,
        titulo: libro.titulo,
        descripcion: libro.descripcion,
        genero_id: generoId || "",
        precio: libro.precio,
        url_imagen: libro.url_imagen,
      });
    }
  }, [libro, generos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLibro(libroActualizado);
    onHide(); // Cerrar modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibroActualizado({
      ...libroActualizado,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="titulo"
            value={libroActualizado.titulo}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            maxLength={250}
            rows={3}
            name="descripcion"
            value={libroActualizado.descripcion}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGenero">
          <Form.Label>Género</Form.Label>
          <Form.Select
            name="genero_id"
            value={libroActualizado.genero_id}
            onChange={handleChange}
          >
            {generos.map((genero) => (
              <option key={genero.genero_id} value={genero.genero_id}>
                {genero.nombre}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            name="precio"
            value={libroActualizado.precio}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formUrlImagen">
          <Form.Label>Portada (url de la imagen)</Form.Label>
          <Form.Control
            type="text"
            name="url_imagen"
            value={libroActualizado.url_imagen}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Modal.Footer>
        <Row className="mb-3">
          <Col className="text-end">
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Form>
  );
};

export default FormActualizarPublicacion;
