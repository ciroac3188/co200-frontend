import React from "react";
import { Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";

const ModalLoginRejected = ({ show, handleClose, response}) => {

  return (
    <>
      <Modal show={show}>
        <div>El inicio de sesion fue rechazado.</div>
        {response}
        <DefaultButtom
              typebuttom={2}
              text={"Cerrar"}
              onClick={handleClose}
            />
      </Modal>
    </>
  );
};

export default ModalLoginRejected;
