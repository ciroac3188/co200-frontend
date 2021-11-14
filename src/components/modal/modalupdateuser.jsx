import React from 'react';
import {Form, Modal} from 'react-bootstrap';
import DefaultButtom from '../defaultButton/defaultButtom';
import Inputform from '../../components/inputform/inputform3';

const ModalupdateUser = ({data, show, handleClose, onSend}) => {

    const sendData = () => {
        const json = {
            _id: data._id,
            nombre : document.getElementById('nombreUpdate').value,
            telefono : document.getElementById('telefonoUpdate').value,
            rol : document.getElementById('rolUpdate').value,
            email : document.getElementById('emailUpdate').value,
            estado : document.getElementById('estadoUpdate').value
        };
        console.log("sendData...");
        console.log(json);
        onSend(json);
    }

    return (
        <>
        <Modal show={show} >
            <Form method="post" > 
                <Modal.Header >
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Inputform id="nombreUpdate" text="Nombre Completo:" value={data.nombre} type={1}/>
                    <Inputform id="telefonoUpdate" text="Teléfono:" value={data.telefono} type={1}/>
                    <Inputform id="emailUpdate" text="Email:" value={data.email} type={1} />
                    <Inputform id="rolUpdate"  text="Rol:" value={data.rol} type={1} />
                    <Inputform id="estadoUpdate" text="Estado:" value={data.estado} type={1} />
                </Modal.Body>
                <Modal.Footer>
                    <DefaultButtom typebuttom={1} text={"Guardar Usuario"} onClick={sendData}/>
                    <DefaultButtom typebuttom={2} text={"Cerrar"} onClick={handleClose} />
                </Modal.Footer>
            </Form> 
        </Modal>                  
        </>
    )
}

export default ModalupdateUser
