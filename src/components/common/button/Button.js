import { Button } from "antd";

const CommonButton = ({
  text,
  handleOnClick,
  align = "",
  customClass = "readmore-button",
}) => {
  return (
    <div style={{ textAlign: align, margin: "1em 0" }}>
      <Button
        className={customClass}
        size="large"
        type="primary"
        shape="round"
        onClick={() => handleOnClick()}
      >
        {text}
      </Button>
    </div>
  );
};
export default CommonButton;
