export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const SET_SELECTED_NEWS = "SET_SELECT_NEWS";
export const RESET_STATE = "RESET_STATE";

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (payload) => ({
  type: FETCH_NEWS_SUCCESS,
  payload,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  error,
});

export const setSelectedNews = (selectedNews) => ({
  type: SET_SELECTED_NEWS,
  selectedNews,
});

export const resetState = () => ({
  type: RESET_STATE,
});
