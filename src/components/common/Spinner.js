import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 48, color: "#009baa" }} />
        }
      />
    </div>
  );
};

export default Spinner;
