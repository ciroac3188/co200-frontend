/* eslint-disable no-lone-blocks */
import React from 'react'
import { Form } from 'react-bootstrap'

const Inputform = ({ text, type, onChange }) => {
    return (
        <Form.Group className="mb-3" controlId={text}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={`Ingrese ${text}`} onChange={onChange} />
        </Form.Group>
    )
}

export default Inputform
