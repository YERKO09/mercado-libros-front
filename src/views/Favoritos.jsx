import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useContext} from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import CardTienda from "../components/CardTienda/CardTienda";

const Favoritos = () => {
  const { favoritos } = useContext(FavoritosContext)

  return (
    <Container fluid className="d-flex flex-column align-items-center p-5">
      <h1>Guardados</h1>
      <Container>
        <Row className="mt-5">
          {favoritos.length > 0
          ? favoritos.map((libro) => (
              <Col key={libro.libro_id} sm={6} md={4} lg={3} className="mb-4">
                <CardTienda libro={libro} />
              </Col>
            ))
          : <Spinner />
          }
        </Row>
      </Container>
    </Container>
  );
};
export default Favoritos;
