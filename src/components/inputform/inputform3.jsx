/* eslint-disable no-lone-blocks */
import React from 'react'
import { Form } from 'react-bootstrap'

const Inputform = ({ id, text, value, type, onChange }) => {
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} defaultValue={value} placeholder={`Ingrese ${text}`} onChange={onChange} disable="false" />
        </Form.Group>
    )
}

export default Inputform
