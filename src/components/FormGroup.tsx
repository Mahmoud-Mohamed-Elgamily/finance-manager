import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./styles.scss";

const FormGroup = ({
  label,
  name,
  placeholder,
  type,
  formik,
  options,
  multiple,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  formik: any;
  options?: any[];
  multiple?: boolean;
}) => {
  return (
    <Form.Group controlId="formBasicEmail" style={{ height: "94px" }}>
      <Form.Label>{label}</Form.Label>
      {type == "select" ? (
        <Typeahead
          allowNew
          multiple={multiple}
          newSelectionPrefix="Create new ? "
          id="basic-typeahead-single"
          labelKey="label"
          options={options || []}
          placeholder={placeholder}
          onBlur={formik.handleBlur}
          onChange={(v) => formik.setFieldValue(name, v)}
          selected={formik.values[name]}
        />
      ) : (
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
      )}
      {formik.touched[name] && formik.errors[name] ? (
        <Form.Text className="text-danger">{formik.errors[name]}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default FormGroup;
