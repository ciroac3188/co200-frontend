import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../inputform/inputform2";

const ModalcreateSale = ({ show, handleClose, onSend }) => {
  const [clienteIdform, setClienteIdform] = useState("");
  const [clienteNombreform, setClienteNombreform] = useState("");
  const [ventaFechaform, setVentaFechaform] = useState("");
  const [idVendedorform, setIdVendedorform] = useState("");
  const [ventaEstadoform, setVentaEstadoform] = useState("");
  const [productoIdform, setProductoIdform] = useState("");
  const [productoCantidadform, setProductoCantidadform] = useState(0);
  const [productoPrecioform, setProductoPrecioform] = useState(0);
  const [valorTotalform, setValorTotalform] = useState(0);

  const sendData = () => {
    const json = {
      clienteId: clienteIdform,
      clienteNombre: clienteNombreform,
      ventaFecha: ventaFechaform,
      idVendedor: idVendedorform,
      ventaEstado: ventaEstadoform,
      productoId: productoIdform,
      productoCantidad: productoCantidadform,
      productoPrecio: productoPrecioform,
      valorTotal: valorTotalform
    };
    console.log(clienteIdform + clienteNombreform);
    onSend(json);
    cleardata();
  };

  function cleardata() {
    setClienteIdform("");
    setClienteNombreform("");
    setVentaFechaform("");
    setIdVendedorform("");
    setVentaEstadoform("");
    setProductoIdform("");
    setProductoCantidadform(0);
    setProductoPrecioform(0);
    setValorTotalform(0);
  }

  return (
    <>
      <Modal show={show}>
        <Form method="post">
          <Modal.Header>
            <Modal.Title>Registrar Venta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Inputform
              text="Id Cliente:"
              value={clienteIdform}
              defaultText={"Id Cliente"}
              type="text"
              onChange={(e) => setClienteIdform(e.target.value)}
            />
            <Inputform
              text="Nombre Cliente:"
              value={clienteNombreform}
              defaultText={"Nombre Cliente"}
              type="text"
              onChange={(e) => setClienteNombreform(e.target.value)}
            />
            <Inputform
              text="Fecha venta:"
              value={ventaFechaform}
              defaultText={"Fecha venta"}
              type="date"
              onChange={(e) => setVentaFechaform(e.target.value)}
            />
            <Inputform
              text="Id Vendedor:"
              value={idVendedorform}
              defaultText={"Id Vendedor"}
              type="text"
              onChange={(e) => setIdVendedorform(e.target.value)}
            />
            <Inputform
              text="Estado:"
              value={ventaEstadoform}
              defaultText={"Estado"}
              type="text"
              onChange={(e) => setVentaEstadoform(e.target.value)}
            />
            <Inputform
              text="Id Producto:"
              value={productoIdform}
              defaultText={"Id Producto"}
              type="text"
              onChange={(e) => setProductoIdform(e.target.value)}
            />
            <Inputform
              text="Cantidad:"
              value={productoCantidadform}
              defaultText={"Cantidad"}
              type="number"
              onChange={(e) => setProductoCantidadform(e.target.value)}
            />
            <Inputform
              text="Precio Unidad:"
              value={productoPrecioform}
              defaultText={"Precio unidad"}
              type="number"
              onChange={(e) => setProductoPrecioform(e.target.value)}
            />
            <Inputform
              text="Valor Total:"
              value={productoCantidadform * productoPrecioform}
              defaultText={"Valor Total"}
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

export default ModalcreateSale;
