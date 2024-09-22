import { Empty } from "antd";
import { generateNewsList } from "./utils";

const Nodata = () => <Empty />;

const NewsList = ({ news, isFetchingNews, handleReadMoreClick }) => {
  return (
    <>
      <h1 className="news-list-heading">News</h1>
      {news.length > 0
        ? generateNewsList(news, handleReadMoreClick)
        : !isFetchingNews && <Nodata />}
    </>
  );
};

export default NewsList;
