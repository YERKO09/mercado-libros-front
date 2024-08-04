import { useContext, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "./style.css";
import { UserContext } from "../../context/UserContext";
import Alert from "../../components/Alert/Alert";
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithEmailAndPassword } = useContext(UserContext);
  const navigate = useNavigate()

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: ""
  })

  const [alert, setAlert] = useState({
    msg: "",
    color: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCredenciales = (e) => {
    const {name, value} = e.target
    setCredenciales({
      ...credenciales,
      [name]: value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    const {email, password} = credenciales
    const response = await loginWithEmailAndPassword(email, password);

    if(response.error) {
      setAlert({
        msg: response.message,
        color: 'danger'
      });

      setTimeout(() => {
        setAlert({msg: '', color: ''});
      }, 4000);

      setIsSubmitting(false)
      return
    }

    setCredenciales({email: "", password: ""})
    setIsSubmitting(false)
    
    if(response.token){
      navigate('/perfil')
    }
  }

  return (
    <div className="container-fluid bg-light d-flex justify-content-center p-5">
      <div className="sectionMain bg-white p-5 m-5 border border-1 border-dark-subtle rounded-3">
      <div className="px-5 mx-4 mb-3">
        <h1>Ingresa tus Datos</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="email"
            value={credenciales.email}
            onChange={handleCredenciales}
            className="form-control"
            placeholder="Tu correo electrónico"
          />
          <Form.Control
            type="password"
            name="password"
            value={credenciales.password}
            onChange={handleCredenciales}
            className="form-control"
            placeholder="Contraseña"
          />

          <Button
            variant="secondary"
            type="submit"
            className="w-100 rounded-5 fw-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner animation="border" variant="light" /> : "Iniciar Sesión"}
          </Button>
          <div className="goRegister mt-3">
            <hr></hr>
            {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}
            <p>
              ¿Aún no tienes tu cuenta? <NavLink to="/registro" className="text-primary">Regístrate</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
