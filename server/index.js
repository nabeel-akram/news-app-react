const express = require("express");
const app = express();
const port = 5000;
const newsData = require("../src/data.json");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function paginate(array, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return array.slice(startIndex, startIndex + pageSize);
}

app.get("/news", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5;
  const query = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredData = newsData.data;

  if (query) {
    filteredData = filteredData.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.body.toLowerCase().includes(query)
    );
  }
  const paginatedData = paginate(filteredData, page, pageSize);

  const totalItems = filteredData.length;

  setTimeout(
    () =>
      res.json({
        news: paginatedData,
        totalCount: totalItems,
        currentPage: page,
        pageSize: pageSize,
        totalPages: Math.ceil(totalItems / pageSize),
      }),
    500
  );
});

app.listen(port, () => {
  console.log(`Mock API is running at http://localhost:${port}`);
});
