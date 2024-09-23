import { Empty } from "antd";
import { generateNewsList } from "./utils";

const Nodata = () => <Empty style={{ marginTop: "5rem" }} />;

const NewsList = ({ news, isFetchingNews, handleReadMoreClick }) => {
  return (
    <>
      {news.length > 0 ? (
        <>
          <h1 className="news-list-heading">News</h1>
          {generateNewsList(news, handleReadMoreClick)}
        </>
      ) : (
        !isFetchingNews && <Nodata />
      )}
    </>
  );
};

export default NewsList;
