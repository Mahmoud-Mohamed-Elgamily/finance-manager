import React from "react";
import { Form } from "react-bootstrap";

const FormGroup = ({
  label,
  name,
  placeholder,
  type,
  formik,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  formik: any;
}) => {
  return (
    <Form.Group controlId="formBasicEmail" style={{ height: "94px" }}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <Form.Text className="text-danger">{formik.errors[name]}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default FormGroup;
