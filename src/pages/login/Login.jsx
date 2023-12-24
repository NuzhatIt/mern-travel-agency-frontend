import React, { useEffect, useState } from "react";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Navbar3 from "./../../components/navbar/Navbar3";
import WhatsAppChat from "./../../components/whatsapp/WhatsappChat";
import ScrollToTop from "./../../components/scroll-to-top/ScrollToTop";
import Footer3 from "./../../components/footer/Footer3";
import bannerArrow from "../../assets/images/background/banner-arrow.png";
import bgGradient1 from "../../assets/images/background/bg-gradient-1.png";
import yellow1 from "../../assets/images/elements/yellow-1.png";
import useWOW from "../../custom-hooks/useWOW";
import manWithBag from "../../assets/images/resources/misc/man-with-bag.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/slices/userApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

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

const Login = () => {
  // const { initWOW } = useWOW();
  // useEffect(() => {
  //   initWOW();
  // }, []);
  // const [form] = Form.useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginApiCall, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onFinish = async (values) => {
    try {
      // calling backend
      const res = await loginApiCall({ email, password }).unwrap();

      console.log(res);

      //set credentials to redux store and localstorage
      dispatch(setCredentials({ ...res }));
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.data.errors);
    }
  };

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
                      {/* login form starts */}
                      <h1 className="text-center">
                        <i className="d-icon">
                          <img src={yellow1} alt="" title="" />
                        </i>
                        Login
                      </h1>

                      <Form
                        {...formItemLayout}
                        autoComplete="off"
                        // form={form}
                        name="login"
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
                          <Input
                            size="large"
                            prefix={<MailOutlined />}
                            placeholder="Type your email"
                            onChange={(e) => setEmail(e.target.value)}
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
                          ]}
                        >
                          <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                          <Button
                            type="button"
                            htmlType="submit"
                            block
                            size="large"
                            className="theme-btn btn-style-one"
                          >
                            Login
                          </Button>
                        </Form.Item>
                      </Form>
                      {/* login form ends */}

                      {/* loader  */}
                      {isLoading && <Loader isLoading={isLoading}/>}
                      

                      <p className="text-center signup-link">
                        Don't have an account? <Link to="/signup">Signup</Link>
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
      <Footer3 />
    </div>
  );
};

export default Login;
