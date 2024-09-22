import "./App.css";
import { Layout } from "antd";
import Routes from "./components/routes/Routes";
import { useReducer } from "react";
import {
  NewsReducer,
  NewsContext,
  initialState,
} from "./components/news/reducer/news.reducer";
const { Header, Content } = Layout;

function App() {
  const [state, dispatch] = useReducer(NewsReducer, initialState);

  return (
    <Layout className="main-layout">
      <Header className="header">
        <h1 className="zero-margin">News</h1>
      </Header>
      <Content style={{ height: "100%" }}>
        <NewsContext.Provider value={{ ...state, dispatch }}>
          <Routes />
        </NewsContext.Provider>
      </Content>
    </Layout>
  );
}

export default App;
