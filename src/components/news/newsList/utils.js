import { Card, Image } from "antd";
import Button from "../../common/button/Button";

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};

export const generateNewsList = (news, handleReadMoreClick) => {
  return news.map((newsItem, index) => (
    <Card
      style={{ border: "none" }}
      key={newsItem.id}
      styles={{
        body: {
          display: "flex",
          flexDirection: `${index % 2 === 0 ? "row" : "row-reverse"}`,
          gap: "20",
          padding: "24px 0",
          height: "60vh",
        },
      }}
    >
      <div className="round-image-container">
        <Image
          preview={false}
          width="100%"
          height="100%"
          className="round-image"
          src={newsItem.featuredimage.formats.medium.url}
        />
      </div>
      <div style={{ padding: "5em" }}>
        <h1>{newsItem.title}</h1>
        <p style={{ fontWeight: "300" }}>
          {formatDate(newsItem.date)} | {newsItem.category.name}
        </p>
        <Button
          text="Read more"
          handleOnClick={() => handleReadMoreClick(newsItem)}
        />
      </div>
    </Card>
  ));
};
