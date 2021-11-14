import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../../components/inputform/inputform2";

const ModalSignUp = ({ show, handleClose, onSend }) => {
  const [nombreform, setNombreform] = useState("");
  const [telefonoform, setTelefonoform] = useState("");
  const [emailform, setEmailform] = useState("");

  const sendData = () => {
    const json = {
      nombre: nombreform,
      telefono: telefonoform,
      rol: 'vendedor',
      email: emailform,
      estado: 'pendiente',
    };
    console.log(nombreform + telefonoform);
    onSend(json);
    cleardata();
  };

  function cleardata() {
    setNombreform("");
    setTelefonoform("");
    setEmailform("");
  }

  return (
    <>
      <Modal show={show}>
        <Form method="post">
          <Modal.Header>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Inputform
              text="Nombre Completo:"
              value={nombreform}
              defaultText={"Nombre"}
              type={1}
              onChange={(e) => setNombreform(e.target.value)}
            />
            <Inputform
              text="Teléfono:"
              value={telefonoform}
              defaultText={"Telefono"}
              type={1}
              onChange={(e) => setTelefonoform(e.target.value)}
            />
            <Inputform
              text="Email:"
              value={emailform}
              defaultText={"Email"}
              type={1}
              onChange={(e) => setEmailform(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <DefaultButtom
              typebuttom={1}
              text={"Enviar registro"}
              onClick={sendData}
            />
            <DefaultButtom
              typebuttom={2}
              text={"Cerrar"}
              onClick={handleClose}
            />
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalSignUp;
