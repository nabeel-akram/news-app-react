import "./searchBar.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SaerchBar = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <Input
        className="search-bar"
        suffix={<SearchOutlined className="search-icon" />}
        placeholder="Enter keywords"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
};

export default SaerchBar;
