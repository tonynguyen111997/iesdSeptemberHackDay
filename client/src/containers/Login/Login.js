import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import CardsFooter from "../../components/organisms/CardsFooter/CardsFooter.jsx";
import { Formik, Field } from "formik";

const Login = ({ signin }) => {
  return (
    <>
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-md">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    {/* Formik Form Start */}
                    <Formik
                      initialValues={{ email: "", email: "" }}
                      onSubmit={(values, { setSubmitting }) => {
                        console.log("dsfasf");

                        setSubmitting(true);

                        signin(values);
                      }}
                    >
                      {({ errors, touched, handleSubmit, isSubmitting }) => (
                        <Form role="form" onSubmit={handleSubmit}>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field
                                name="email"
                                render={({ field }) => (
                                  <Input
                                    placeholder="Email"
                                    type="text"
                                    {...field}
                                  />
                                )}
                              />
                            </InputGroup>
                            <div className="text-center">
                              <small className="text-warning">
                                {errors.email && touched.email && errors.email}
                              </small>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field
                                name="password"
                                placeholder="Password"
                                render={({ field }) => (
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    {...field}
                                  />
                                )}
                              />
                            </InputGroup>
                          </FormGroup>

                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Login
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
};

Login.propTypes = {};

export default Login;
