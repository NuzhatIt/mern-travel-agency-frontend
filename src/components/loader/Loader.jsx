import { Spin } from "antd";
const Loader = ({ isLoading }) => {
  const spinning = isLoading;
  return (
    <>
      <Spin
        size="large"
        spinning={spinning}
        fullscreen
      />
    </>
  );
};
export default Loader;
