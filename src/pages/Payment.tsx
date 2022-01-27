import { useFormik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import { paymentInitialValues } from "../initialValues/payment.initial";
import Database from "../logic/database";
import { validationSchema } from "../validations/payment.validation";

import "./styles.scss";
const Payment = () => {
  const formik = useFormik({
    initialValues: paymentInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Database.insert(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <FormGroup label="Date" name="date" type="date" formik={formik} />
          </Col>
          <Col>
            <FormGroup label="Type" name="type" type="text" formik={formik} />
          </Col>
          <Col>
            <FormGroup label="Item" name="item" type="text" formik={formik} />
          </Col>
          <Col>
            <FormGroup
              label="Count"
              name="count"
              type="number"
              formik={formik}
            />
          </Col>
          <Col>
            <FormGroup
              label="Price"
              name="price"
              type="number"
              formik={formik}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Payment;
