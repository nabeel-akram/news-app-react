import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 48, color: "#009baa" }} />
        }
      />
    </div>
  );
};

export default Spinner;
