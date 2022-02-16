import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import { paymentInitialValues } from "../initialValues/payment.initial";
import Database from "../logic/database";
import { validationSchema } from "../validations/payment.validation";
import { Option } from "react-bootstrap-typeahead/types/types";

import "./styles.scss";
import { IPayment } from "../interfaces/IPayment";
const NewPayment = ({
  payments,
  setPayments,
}: {
  payments: IPayment[];
  setPayments: React.Dispatch<React.SetStateAction<IPayment[]>>;
}) => {
  const formik = useFormik({
    initialValues: paymentInitialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await Database.insert(values, setTypes, setItems);
      setPayments([values, ...payments]);
      formik.resetForm();
    },
  });

  const [types, setTypes] = useState<Option[]>([]);
  const [items, setItems] = useState<Option[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTypes(await Database.getTypes());
        setItems(await Database.getItems());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <FormGroup label="Date" name="date" type="date" formik={formik} />
          </Col>
          <Col>
            <FormGroup
              label="Type"
              name="type"
              type="select"
              options={types}
              placeholder="select type"
              formik={formik}
            />
          </Col>
          <Col>
            <FormGroup
              label="Items"
              name="items"
              type="select"
              options={items}
              multiple={true}
              formik={formik}
            />
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
              label="Item Price"
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

export default NewPayment;
