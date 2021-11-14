import React from 'react';
import { Table } from 'react-bootstrap';
import DefaultButtom from '../defaultButton/defaultButtom';


const DefaultTable = ({ data, dataMenus, option, onDeletebuttom, onUpdateButton }) => {

    const deleteData = (id) => {
        console.log("id para borrar" + id);
        onDeletebuttom(id);
    }

    if (option === 1) { // retornar opciones de mapeo para la tabla de gestion de usuarios
        return (
            <div className="DefaultTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                dataMenus.map((datos) => (
                                    <th key={datos.id}>
                                        {datos.col}
                                    </th>
                                )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((datos, i) => (
                                <tr key={datos._id}>
                                    <td>{i + 1}</td>
                                    <td>{datos.nombre}</td>
                                    <td>{datos.telefono}</td>
                                    <td>{datos.email}</td>
                                    <td>{datos.rol}</td>
                                    <td>{datos.estado}</td>
                                    <td>
                                        <DefaultButtom typebuttom={1} text={"EDITAR"} onClick={() => onUpdateButton(datos)}/>  <br />
                                        <DefaultButtom typebuttom={2} text={"ELIMINAR"} onClick={() => deleteData(datos._id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    } else if (option === 2) { // retornar opciones de mapeo para la tabla de gestion de Productos
        return (
            <div className="DefaultTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                dataMenus.map((datos) => (
                                    <th key={datos.id}>
                                        {datos.col}
                                    </th>
                                )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((datos, i) => (
                                <tr key={datos._id}>
                                    <td>{i + 1}</td>
                                    <td>{datos.producto}</td>
                                    <td>{datos.valor}</td>
                                    <td>{datos.estado}</td>
                                    <td>
                                        <DefaultButtom typebuttom={1} text={"EDITAR"} onClick={() => onUpdateButton(datos)} />  <br />
                                        <DefaultButtom typebuttom={2} text={"ELIMINAR"} onClick={() => deleteData(datos._id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    } else if (option === 3) { // retornar opciones de mapeo para la tabla de gestion de Ventas
        return (
            <div className="DefaultTable">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                dataMenus.map((datos) => (
                                    <th key={datos.id}>
                                        {datos.col}
                                    </th>
                                )
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((datos, i) => (
                                <tr key={datos._id}>
                                    <td>{i + 1}</td>
                                    <td>{datos.clienteId}</td>
                                    <td>{datos.clienteNombre}</td>
                                    <td>{datos.ventaFecha}</td>
                                    <td>{datos.ventaEstado}</td>
                                    <td>{datos.productoId}</td>
                                    <td>{(datos.productoCantidad * datos.productoPrecio)}</td>
                                    <td>
                                        <DefaultButtom typebuttom={1} text={"EDITAR"} onClick={() => onUpdateButton(datos)} />  <br />
                                        <DefaultButtom typebuttom={2} text={"ELIMINAR"} onClick={() => deleteData(datos._id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DefaultTable