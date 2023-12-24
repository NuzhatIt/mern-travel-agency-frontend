import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import Footer3 from "../../components/footer/Footer3";
import Navbar3 from "../../components/navbar/Navbar3";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import WhatsAppChat from "../../components/whatsapp/WhatsappChat";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { useRegisterMutation } from "../../redux/slices/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../../redux/slices/authSlice";
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
  // const { initWOW } = useWOW();
  // useEffect(() => {
  //   initWOW();
  // }, []);
  // const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [agreement, setAgreement] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerApiCall, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onFinish = async (values) => {
    // console.log(name,email,phone,password,gender,agreement);
    try {
      // calling backend
      const res = await registerApiCall({
        name,
        email,
        phone,
        password,
        gender,
        agreement,
        // ...values,
      }).unwrap();
      // console.log(res);
      //set credentials to redux store and localstorage
      dispatch(setCredentials({ ...res }));
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.data.errors);
    }
  };
  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="+88">+88</Option>
  //     </Select>
  //   </Form.Item>
  // );

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
                          name="name"
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
                          <Input
                            size="large"
                            placeholder="Type yor name"
                            onChange={(e) => setName(e.target.value)}
                          />
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
                          <Input
                            size="large"
                            placeholder="Type your email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
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
                              validator: (_, value) =>
                                value &&
                                /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
                                  ? Promise.resolve()
                                  : Promise.reject("Use valid phone number"),
                            },
                            // {
                            //   min: 11,
                            //   message: "Phone number must be 11 digits",
                            // },
                          ]}
                          hasFeedback
                        >
                          <Input
                            size="large"
                            // addonBefore={prefixSelector}
                            style={{
                              width: "100%",
                            }}
                            onChange={(e) => setPhone(e.target.value)}
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
                          <Input.Password
                            size="large"
                            onChange={(e) => setPassword(e.target.value)}
                          />
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
                          <Input.Password size="large" />
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
                          <Select
                            size="large"
                            placeholder="Select your gender"
                            onChange={(value) => setGender(value)}
                          >
                            <Option value="MALE">Male</Option>
                            <Option value="FEMALE">Female</Option>
                            <Option value="OTHERS">Others</Option>
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
                          <Checkbox
                            style={{}}
                            onChange={(e) => setAgreement(e.target.checked)}
                          >
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

                      {/* loader  */}
                      {isLoading && <Loader isLoading={isLoading} />}

                      <p className="text-center signup-link">
                        Already have an account? <Link to="/login">Log In</Link>
                      </p>
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
