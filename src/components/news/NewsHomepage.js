import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import NewsList from "./newsList/NewsList";
import Button from "../common/button/Button";
import { useNavigate } from "react-router-dom";
import SaerchBar from "./searchBar/SearchBar";
import { NewsContext } from "./reducer/news.reducer";
import { setSelectedNews, resetState } from "./reducer/news.actions";
import { fetchNews } from "./api/news.api";
import Spinner from "../common/spinner/Spinner";

const NewsHomepage = () => {
  const firstRender = useRef(true);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { news, currentPage, dispatch, isFetchingNews, totalPages } =
    useContext(NewsContext);

  const handleFetchNews = useCallback(
    ({ currentPage, searchInput = "", append = false }) => {
      fetchNews(dispatch, currentPage, searchInput, append);
    },
    [dispatch]
  );

  useEffect(() => {
    news.length === 0 && handleFetchNews({ currentPage, append: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput.length > 2) {
        dispatch(resetState());
        handleFetchNews({ currentPage: 1, searchInput, append: false });
      } else if (!searchInput.length & !firstRender.current) {
        dispatch(resetState());
        handleFetchNews({ currentPage: 1, searchInput, append: false });
      }
      firstRender.current = false;
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, dispatch, handleFetchNews]);

  const handleReadMoreClick = (newsItem) => {
    dispatch(setSelectedNews(newsItem));
    navigate(`/news/${newsItem.id}`);
  };

  const handleLoadMore = () => {
    handleFetchNews({
      currentPage: currentPage + 1,
      searchInput,
      append: true,
    });
  };

  return (
    <div>
      <SaerchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <NewsList
        isFetchingNews={isFetchingNews}
        news={news}
        handleReadMoreClick={handleReadMoreClick}
        handleLoadMore={handleLoadMore}
      />
      {isFetchingNews ? (
        <Spinner />
      ) : (
        currentPage < totalPages && (
          <Button
            customClass="loadmore-button"
            text="Load more"
            align="center"
            handleOnClick={() => handleLoadMore()}
          />
        )
      )}
    </div>
  );
};

export default NewsHomepage;
