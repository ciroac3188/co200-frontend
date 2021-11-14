import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from "axios";
import DefaultTable from "../../components/defaultTable/defaultable";
import DefaultButtom from "../../components/defaultButton/defaultButtom";
import ModalcreateSale from "../../components/modal/modalcreatesale";
import ModalupdateSale from "../../components/modal/modalupdatesale";

const dataMenus = [
  {
    id: 1,
    col: "ID",
  },
  {
    id: 2,
    col: "ID CLIENTE",
  },
  {
    id: 3,
    col: "NOMBRE CLIENTE",
  },
  {
    id: 4,
    col: "FECHA-FAC",
  },
  {
    id: 5,
    col: "ESTADO",
  },
  {
    id: 6,
    col: "ID PRODUCTO",
  },
  {
    id: 7,
    col: "VALOR TOTAL",
  },
  {
    id: 8,
    col: "ACTIONS",
  },
];

const GestionVentas = () => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCreateClose = () => setShowCreate(false);
  const handleCreateShow = () => setShowCreate(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdateClose = () => setShowUpdate(false);

  const [sales, setSales] = useState([]);
  const [saleRecord, setSaleRecord] = useState({
    clienteNombre: "",
  });

  async function handleUpdateShow(record) {
    console.log("record a cargar...");
    console.log(record.saleo);
    setSaleRecord(record);
    setShowUpdate(true);
  }

  async function addSale(sale) {
    console.log(sale);
    axios.post("http://localhost:3010/api/v1/sale/add", sale);
    handleCreateClose();
    listSales();
  }

  async function listSales() {
    try {
      console.log("a buscar la lista..");
      axios.get("http://localhost:3010/api/v1/sale/list").then((resp) => {
        setSales(resp.data.sales);
        console.log(resp.data.sales);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteSale(idSale) {
    console.log("preparando el borrado..." + idSale);
    axios.delete("http://localhost:3010/api/v1/sale/delete/" + idSale);
    listSales();
  }

  async function updateSale(sale) {
    console.log("preparando para actualizar...");
    console.log(sale);
    axios.put("http://localhost:3010/api/v1/sale/update", sale);
    handleUpdateClose();
    listSales();
  }

  useEffect(() => {
    listSales();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Gestion de Ventas</CardTitle>
                <p className="card-category">Listado de Ventas </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h6">Fomulario de ventas</CardTitle>
                        <div>
                          <DefaultButtom
                            typebuttom={1}
                            text={"Registrar Venta"}
                            onClick={handleCreateShow}
                          />
                          <DefaultButtom
                            typebuttom={2}
                            text={"Buscar"}
                            onClick={listSales}
                          />
                          <ModalcreateSale
                            show={showCreate}
                            handleClose={handleCreateClose}
                            onSend={addSale}
                          />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <DefaultTable
                          data={sales}
                          dataMenus={dataMenus}
                          option={3}
                          onDeletebuttom={deleteSale}
                          onUpdateButton={handleUpdateShow}
                        />
                        <ModalupdateSale
                          data={saleRecord}
                          show={showUpdate}
                          handleClose={handleUpdateClose}
                          onSend={updateSale}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GestionVentas;
