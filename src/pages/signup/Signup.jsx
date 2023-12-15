import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import WhatsAppChat from "../../components/whatsapp/WhatsappChat";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Navbar3 from "../../components/navbar/Navbar3";
import Footer3 from "../../components/footer/Footer3";
import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";

import useWOW from "../../custom-hooks/useWOW";
import { Link } from 'react-router-dom';
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
  const { initWOW } = useWOW();
  useEffect(() => {
    initWOW();
  }, []);
  // const [form] = Form.useForm();
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
        <Option value="88">+88</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="page-wrapper">
      <WhatsAppChat />
      <ScrollToTop />
      <Navbar3 />
      <div className="banner-section">
        <div className="banner-container">
          <div
            className="banner-arrow wow slideInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <img src={bannerArrow} alt="" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="left-col col-lg-6 col-md-12">
                <div className="inner">
                  <div className="clearfix">
                    <div className="content">
                      <div className="bg-image">
                        <img src={bgGradient1} alt="" />
                      </div>
                      {/* signup form starts */}
                      <h1 className="text-center">
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Signup
                      </h1>

                      <Form
                        {...formItemLayout}
                        autoComplete="off"
                        // form={form}
                        name="signup"
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
                          name="fullname"
                          label="Full Name"
                          rules={[
                            {
                              required: true,
                              message: "Please Enter Your Name",
                            },
                            {
                              whitespace: true,
                            },
                            {
                              min: 4,
                              message: "Full name must be 4 characters",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input placeholder="Type yor name" />
                        </Form.Item>

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
                          hasFeedback
                        >
                          <Input placeholder="Type your email" />
                        </Form.Item>

                        <Form.Item
                          name="phone"
                          label="Phone Number"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                            {
                              min: 11,
                              message: "Phone number must be 11 digits",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input
                            addonBefore={prefixSelector}
                            style={{
                              width: "100%",
                            }}
                          />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                            {
                              validator: (_, value) =>
                                value &&
                                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/.test(
                                  value
                                )
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      "Password must have 6 to 16 characters with at least a symbol, upper and lower case letters and a number"
                                    ),
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
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(
                                    "The new password that you entered does not match!"
                                  )
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item
                          name="gender"
                          label="Gender"
                          rules={[
                            {
                              required: true,
                              message: "Please select your gender!",
                            },
                          ]}
                        >
                          <Select placeholder="Select your gender">
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                          </Select>
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
                          <Checkbox style={{
                            
                          }}>
                            I have read the <a href="">agreement</a>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                          <Button
                            type="button"
                            htmlType="submit"
                            block
                            size="large"
                            className="theme-btn btn-style-one"
                          >
                            Signup
                          </Button>
                        </Form.Item>
                      </Form>
                      {/* signup form ends */}
                      
                        <p className="text-center signup-link">Already have an account? <Link to='/login'>Log In</Link></p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-lg-6 col-md-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${manWithBag})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="signup-section">
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
                    style={{ backgroundImage: `url(${manWithBag})` }}
                  >
                    <img src={manWithBag}></img>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div> */}
      <Footer3 />
    </div>
  );
};

export default Signup;
