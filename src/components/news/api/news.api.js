import {
  fetchNewsFailure,
  fetchNewsRequest,
  fetchNewsSuccess,
} from "../reducer/news.actions";

export const fetchNews = async (
  dispatch,
  page = 1,
  query = "",
  append = false
) => {
  dispatch(fetchNewsRequest());
  try {
    const response = await fetch(
      `http://localhost:5000/news?page=${page}&q=${query}`
    );

    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    const { news, totalCount, currentPage, totalPages } = data;
    dispatch(
      fetchNewsSuccess({ news, totalCount, currentPage, totalPages, append })
    );
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};
