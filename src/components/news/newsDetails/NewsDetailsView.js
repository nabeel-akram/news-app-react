import { useContext, useEffect } from "react";
import { NewsContext } from "../reducer/news.reducer";
import { useNavigate } from "react-router-dom";
import { Image, Typography } from "antd";
import { formatDate } from "../newsList/utils";
import Button from "../../common/button/Button";

const { Text } = Typography;

const NewsDetailsView = () => {
  const { selectedNews } = useContext(NewsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof selectedNews.id === "undefined") {
      navigate("/news");
    }
  }, [navigate, selectedNews.id]);

  return (
    <div style={{ padding: "24px" }}>
      <div>
        <h1>{selectedNews?.title}</h1>
        <Image
          preview={false}
          width={"100%"}
          src={selectedNews.featuredimage?.formats?.large?.url}
        />
      </div>
      <div style={{ marginTop: "1em" }}>
        <Text style={{ fontSize: "12px" }}>
          Published: {formatDate(selectedNews.date)}
        </Text>
      </div>
      <div style={{ marginTop: "3em" }}>
        <Text style={{ whiteSpace: "pre-wrap" }} strong>
          {selectedNews.body}
        </Text>
      </div>
      <Button
        text="Back to News List"
        align="center"
        handleOnClick={() => navigate("/news")}
      />
    </div>
  );
};

export default NewsDetailsView;
