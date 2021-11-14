import React from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../../components/inputform/inputform3";

const ModalupdateSale = ({ data, show, handleClose, onSend }) => {
  const sendData = () => {
    const json = {
      _id: data._id,
      clienteId: document.getElementById("clienteIdUpdate").value,
      clienteNombre: document.getElementById("clienteNombreUpdate").value,
      ventaFecha: document.getElementById("ventaFacturaUpdate").value,
      idVendedor: document.getElementById("idVendedorUpdate").value,
      ventaEstado: document.getElementById("estadoVentaUpdate").value,
      productoId: document.getElementById("productoIdUpdate").value,
      productoCantidad: document.getElementById("productoCantidadUpdate").value,
      productoPrecio: document.getElementById("productoPrecioUpdate").value
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
            <Modal.Title>Editar Venta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Inputform
              id="clienteIdUpdate"
              text="Id Cliente:"
              value={data.clienteId}
              type="text"
            />
            <Inputform
            id="clienteNombreUpdate"
              text="Nombre Cliente:"
              value={data.clienteNombre}
              type="text"
            />
            <Inputform
            id="ventaFacturaUpdate"
              text="Fecha venta:"
              value={data.ventaFecha}
              type="date"
            />
            <Inputform
            id="idVendedorUpdate"
              text="Id Vendedor:"
              value={data.idVendedor}
              type="text"
            />
            <Inputform
            id="estadoVentaUpdate"
              text="Estado:"
              value={data.ventaEstado}
              type="text"
            />
            <Inputform
            id="productoIdUpdate"
              text="Id Producto:"
              value={data.productoId}
              type="text"
            />
            <Inputform
            id="productoCantidadUpdate"
              text="Cantidad:"
              value={data.productoCantidad}
              type="number"
            />
            <Inputform
            id="productoPrecioUpdate"
              text="Precio Unidad:"
              value={data.productoPrecio}
              type="number"
            />
            <Inputform
            id="valorTotalUpdate"
              text="Valor Total:"
              value={data.productoCantidad * data.productoPrecio}
              type="number"
            />
          </Modal.Body>
          <Modal.Footer>
            <DefaultButtom
              typebuttom={1}
              text={"Guardar Venta"}
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

export default ModalupdateSale;
