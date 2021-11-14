import React from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../../components/inputform/inputform3";

const ModalupdateProduct = ({ data, show, handleClose, onSend }) => {
  const sendData = () => {
    const json = {
      _id: data._id,
      producto: document.getElementById("productoUpdate").value,
      valor: document.getElementById("valorUpdate").value,
      estado: document.getElementById("estadoUpdate").value,
    };
    console.log("sendData...");
    console.log(json);
    onSend(json);
  };

  return (
    <>
      <Modal show={show}>
        <Form method="post">
          <Modal.Header>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Inputform
              id="productoUpdate"
              text="Producto:"
              value={data.producto}
              type={1}
            />
            <Inputform
              id="valorUpdate"
              text="Valor:"
              value={data.valor}
              type={1}
            />
            <Inputform
              id="estadoUpdate"
              text="Estado:"
              value={data.estado}
              type={1}
            />
          </Modal.Body>
          <Modal.Footer>
            <DefaultButtom
              typebuttom={1}
              text={"Guardar Producto"}
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

export default ModalupdateProduct;
