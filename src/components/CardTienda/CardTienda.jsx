// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Card, Badge } from "react-bootstrap";
import ModalDetalle from "../Modal/ModalDetallePublicacion";
import datosFormateados from "../../helpers/formateosGeneral";
import "./style.css";

const CardTienda = ({ libro }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className="card-shadow h-100">
      <Card.Img
        variant="top"
        src={libro.url_imagen}
        className="imgStyle"
      />
      <Card.Body className="info py-1">
        <div>
          <h5 className="titulo">{libro.titulo}</h5>
          <p className="autor m-0">{libro.autor}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1 align-items-center">
            <Badge bg="dark">{libro.genero}</Badge>
            <Badge bg="dark">{libro.anio}</Badge>
          </div>
          <p className="precio">{datosFormateados.formatoCLP(libro.precio)}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <div>
          <span>publicado por</span>
          <p className="usuario">{libro.usuario}</p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setModalShow(true)}
        >
          <i className="fa-solid fa-eye me-2"></i>
          Ver Detalles
        </Button>
        <ModalDetalle
          show={modalShow}
          onHide={() => setModalShow(false)}
          libro={libro}
        />
      </Card.Footer>
    </Card>
  );
};

export default CardTienda;
