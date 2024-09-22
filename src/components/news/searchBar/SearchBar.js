import "./searchBar.css";
import { Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SaerchBar = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <Input
        className="search-bar"
        suffix={
          <Tooltip title="Search">
            <SearchOutlined className="search-icon" />
          </Tooltip>
        }
        placeholder="Enter keywords"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
};

export default SaerchBar;
