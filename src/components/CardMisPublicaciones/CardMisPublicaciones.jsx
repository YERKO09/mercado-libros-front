import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "./style.css";

const CardMisPublicaciones = ({ libro }) => {
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth();
    const año = date.getFullYear();
    return `${dia}/${mes}/${año}`;
  };

  return (
    <>
      <Card className="w-100 h-100">
        <Card.Body className="d-flex p-0">
          <Card.Img
            variant="top"
            src={libro.url_imagen}
            className="imagen rounded-end-0"
            style={{ width: "40%" }}
          />
          <div className="flex-grow-1 p-2">
            <Card.Subtitle className="mb-2 text-muted pt-2">
              <i class="fa-regular fa-calendar"></i>
              <span className="ms-2 text-secondary">
                {formatearFecha(libro.fecha_publicacion)}
              </span>
            </Card.Subtitle>
            <h6 className="fw-bold">{libro.titulo}</h6>
            <Card.Text className="desc">{libro.descripcion}</Card.Text>
            <Card.Text className="text-dark">${libro.precio}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between p-1">             
          <ButtonGroup className="w-100">
            <Button variant="light">
              <i class="fa-solid fa-pencil text-success"></i>
              <span className="ms-2">editar</span>
            </Button>
            <Button variant="light">
              <i class="fa-solid fa-trash text-danger-emphasis"></i>
              <span className="ms-2">eliminar</span>
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CardMisPublicaciones;
