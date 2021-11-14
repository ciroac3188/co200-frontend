import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from "axios";
import DefaultTable from "../../components/defaultTable/defaultable";
import DefaultButtom from "../../components/defaultButton/defaultButtom";
import ModalcreateProduct from "../../components/modal/modalcreateproduct";
import ModalupdateProduct from "../../components/modal/modalupdateproducto";

const dataMenus = [
  {
    id: 1,
    col: "ID",
  },
  {
    id: 2,
    col: "DESCRIPCION",
  },
  {
    id: 3,
    col: "VALOR U",
  },
  {
    id: 4,
    col: "ESTADO",
  },
  {
    id: 4,
    col: "ACTIONS",
  },
];

const GestionProductos = () => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCreateClose = () => setShowCreate(false);
  const handleCreateShow = () => setShowCreate(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdateClose = () => setShowUpdate(false);

  const [products, setProducts] = useState([]);
  const [productRecord, setProductRecord] = useState({
    producto: "",
  });

  async function handleUpdateShow(record) {
    console.log("record a cargar...");
    console.log(record.producto);
    setProductRecord(record);
    setShowUpdate(true);
  }

  async function addProduct(product) {
    console.log(product);
    axios.post("http://localhost:3010/api/v1/product/add", product);
    handleCreateClose();
    listProducts();
  }

  async function listProducts() {
    try {
      console.log("a buscar la lista..");
      axios.get("http://localhost:3010/api/v1/product/list").then((resp) => {
        setProducts(resp.data.products);
        console.log(resp.data.products);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteProduct(idProduct) {
    console.log("preparando el borrado..." + idProduct);
    axios.delete("http://localhost:3010/api/v1/product/delete/" + idProduct);
    listProducts();
  }

  async function updateProduct(product) {
    console.log("preparando para actualizar...");
    console.log(product);
    axios.put("http://localhost:3010/api/v1/product/update", product);
    handleUpdateClose();
    listProducts();
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Gestion de Productos</CardTitle>
                <p className="card-category">
                  Aqui podras crear tus productos{" "}
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h6">Fomulario de productos</CardTitle>
                        <div>
                          <DefaultButtom
                            typebuttom={1}
                            text={"Registrar Producto"}
                            onClick={handleCreateShow}
                          />
                          <DefaultButtom
                            typebuttom={2}
                            text={"Buscar"}
                            onClick={listProducts}
                          />
                          <ModalcreateProduct
                            show={showCreate}
                            handleClose={handleCreateClose}
                            onSend={addProduct}
                          />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <DefaultTable
                          data={products}
                          dataMenus={dataMenus}
                          option={2}
                          onDeletebuttom={deleteProduct}
                          onUpdateButton={handleUpdateShow}
                        />
                        <ModalupdateProduct
                          data={productRecord}
                          show={showUpdate}
                          handleClose={handleUpdateClose}
                          onSend={updateProduct}
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

export default GestionProductos;
