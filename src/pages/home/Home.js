import slide1 from '../../img/altumcode-Ui3zMjpMrmM-unsplash.jpg'
import slide2 from '../../img/christina-wocintechchat-com-R_W_9D-53lw-unsplash.jpg'
import slide3 from '../../img/screen-post-wcoXr9o83o8-unsplash.jpg'
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import DefaultButtom from "../../components/defaultButton/defaultButtom";
import GoogleLogin from 'react-google-login';
import Nav from 'react-bootstrap/Nav';
import ModalSignUp from "../../components/modal/modalsignup";
//import ModalLoginRejected from "../../components/modal/modalloginrejected";
import axios from "axios";

const Home = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const handleSignUpClose = () => setShowSignUp(false);
    const handleSignUpShow = () => setShowSignUp(true);

    async function addUser(user) {
        console.log(user);
        axios.post("http://localhost:3010/api/v1/user/add", user);
        handleSignUpClose();
    }

    const respOKGoogle = (respuesta) => {
        console.log(respuesta);
        console.log(respuesta.profileObj);
        //validar si existe como usuario y su estado
        // si existe, redireccionar
        // si no existe, registrarlo con estado pendiente...
    }

    const respWrongGoogle = (respuesta) => {
        console.log(respuesta);
    }

    return (
        <>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link><GoogleLogin
                        clientId="429513669075-ht7ane4fnotjik9nsb4slp01h0qhegbv.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={respOKGoogle}
                        onFailure={respWrongGoogle}
                        cookiePolicy={'single_host_origin'}
                    /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><DefaultButtom
                        typebuttom={1}
                        text={"Sign Up"}
                        onClick={handleSignUpShow}
                    /></Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader><div align="left"><CardTitle>The best components... for the best ideas</CardTitle></div>
                            </CardHeader>
                            <CardBody>
                                <Carousel>
                                    <Carousel.Item interval={1000}>
                                        <img
                                            className="d-block w-100"
                                            src={slide1}
                                            alt="Setup your best office at home"
                                        />
                                        <Carousel.Caption>
                                            <h3>Setup your best office at home</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={1000}>
                                        <img
                                            className="d-block w-100"
                                            src={slide2}
                                            alt="Setup your best office at home"
                                        />
                                        <Carousel.Caption>
                                            <h3>Setup your best office at home</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={1000}>
                                        <img
                                            className="d-block w-100"
                                            src={slide3}
                                            alt="Setup your best office at home"
                                        />
                                        <Carousel.Caption>
                                            <h3>Setup your best office at home</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                <ModalSignUp show={showSignUp} handleClose={handleSignUpClose} onSend={addUser} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;