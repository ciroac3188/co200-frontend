import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from "axios";
import DefaultTable from "../../components/defaultTable/defaultable";
import DefaultButtom from "../../components/defaultButton/defaultButtom";
import ModalcreateUser from "../../components/modal/modalcreateuser";
import ModalupdateUser from "../../components/modal/modalupdateuser";

const dataMenus = [
  {
    id: 1,
    col: "ID",
  },
  {
    id: 2,
    col: "NOMBRE",
  },
  {
    id: 3,
    col: "TELEFONO",
  },
  {
    id: 4,
    col: "EMAIL",
  },
  {
    id: 5,
    col: "ROL",
  },
  {
    id: 6,
    col: "ESTADO",
  },
  {
    id: 7,
    col: "ACTIONS",
  },
];

const GestionUsuarios = () => {

  const [showCreate, setShowCreate] = useState(false);
  const handleCreateClose = () => setShowCreate(false);
  const handleCreateShow = () => setShowCreate(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdateClose = () => setShowUpdate(false);

  const [users, setUsers] = useState([]);
  const [userRecord, setUserRecord] = useState({
    nombre: "",
  });

  async function handleUpdateShow(record) {
    console.log("record a cargar...");
    console.log(record.nombre);
    setUserRecord(record);
    setShowUpdate(true);
  }

  async function addUser(user) {
    console.log(user);
    axios.post("http://localhost:3010/api/v1/user/add", user);
    handleCreateClose();
    listUsers();
  }

  async function listUsers() {
    try {
      console.log("a buscar la lista..");
      axios.get("http://localhost:3010/api/v1/user/list").then((resp) => {
        setUsers(resp.data.users);
        console.log(resp.data.users);
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteUser(idUser) {
    console.log("preparando el borrado..." + idUser);
    axios.delete("http://localhost:3010/api/v1/user/delete/" + idUser);
    listUsers();
  }

  async function updateUser(user) {
    console.log("preparando para actualizar...");
    console.log(user);
    axios.put("http://localhost:3010/api/v1/user/update", user);
    handleUpdateClose();
    listUsers();
  }

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Gestion de Usuarios</CardTitle>
                <p className="card-category">Listado de usuarios</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle>
                          <div>
                            <DefaultButtom
                              typebuttom={1}
                              text={"Registrar Usuario"}
                              onClick={handleCreateShow}
                            />
                            <DefaultButtom
                              typebuttom={2}
                              text={"Buscar"}
                              onClick={listUsers}
                            />
                            <ModalcreateUser
                              show={showCreate}
                              handleClose={handleCreateClose}
                              onSend={addUser}
                            />
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DefaultTable
                          data={users}
                          dataMenus={dataMenus}
                          option={1}
                          onDeletebuttom={deleteUser}
                          onUpdateButton={handleUpdateShow}
                        />
                        <ModalupdateUser data={userRecord} show={showUpdate} handleClose={handleUpdateClose} onSend={updateUser}  />
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

export default GestionUsuarios;

//const GestionUsuarios = () => {
