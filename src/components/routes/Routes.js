import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NewsDetailsView from "../news/newsDetails/NewsDetailsView";
import NewsHomepage from "../news/NewsHomepage";
import { useContext } from "react";
import { newsContext } from "../news/reducer/news.reducer";

const AppRoutes = () => {
  const { selectedNews } = useContext(newsContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<NewsHomepage />} />
        {selectedNews?.id && (
          <Route path="/news/:id" element={<NewsDetailsView />} />
        )}
        <Route path="*" element={<Navigate to="/news" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
