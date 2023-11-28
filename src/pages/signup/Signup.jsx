import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import WhatsAppChat from "../../components/whatsapp/WhatsappChat";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "../../components/footer/Footer3";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  // const onWebsiteChange = (value) => {
  //   if (!value) {
  //     setAutoCompleteResult([]);
  //   } else {
  //     setAutoCompleteResult(
  //       [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
  //     );
  //   }
  // };
  // const websiteOptions = autoCompleteResult.map((website) => ({
  //   label: website,
  //   value: website,
  // }));
  return (
    <>
      <WhatsAppChat />
      <ScrollToTop />
      <Navbar3 />
      <div className="signup-section">
        <div className="auto-container">
          <div className="row clearfix justify-content-center">
            <Row gutter={8}>
              <Col span={12}>
                <h1 className="text-center">Signup</h1>
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  initialValues={{
                    prefix: "+88",
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  scrollToFirstError
                >
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The new password that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Please select gender!",
                      },
                    ]}
                  >
                    <Select placeholder="select your gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Captcha"
                    extra="We must make sure that your are a human."
                  >
                    <Row gutter={8}>
                      <Col span={12}>
                        <Form.Item
                          name="captcha"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: "Please input the captcha you got!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Button>Get captcha</Button>
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Should accept agreement")
                              ),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={12}>
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                  style={{
                    marginLeft: "30%",
                  }}
                >
                  <div
                    className="image-layer"
                    // style={{ backgroundImage: `url(${manWithBag})` }}
                  >
                    <img src={manWithBag}></img>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* <Footer3 /> */}
    </>
  );
};

export default Signup;
