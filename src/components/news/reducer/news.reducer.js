import { createContext } from "react";
import {
  SET_SELECTED_NEWS,
  RESET_STATE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./news.actions";

export const initialState = {
  news: [],
  isFetchingNews: false,
  selectedNews: null,
  currentPage: 1,
  pageSize: 5,
  totalCount: 0,
  totalPages: 1,
};

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, isFetchingNews: true };

    case FETCH_NEWS_SUCCESS:
      const { append, news, currentPage, totalPages, totalCount } =
        action.payload;
      return {
        ...state,
        isFetchingNews: false,
        news: append ? [...state.news, ...news] : news,
        currentPage,
        totalPages,
        totalCount,
      };

    case FETCH_NEWS_FAILURE:
      console.log(action.error);
      return { ...state, isFetchingNews: false, error: action.error };

    case SET_SELECTED_NEWS:
      return { ...state, selectedNews: action.selectedNews };

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const NewsContext = createContext(null);
