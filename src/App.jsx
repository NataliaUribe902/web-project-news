import "./App.css";
import Header from "./components/Header/Header";
import TopStories from "./components/TopStories/TopStories";
import ArticleShowcase from "./components/ArticleShowcase/ArticleShowcase";
import Podcast from "./components/Podcast/Podcast";
import Museum from "./components/Museum/Museum";
import Columns from "./components/Columns/Columns";
import Footer from "./components/Footer/Footer";

import MuseumPage from "./components/MuseumPage/MuseumPage";
import DocumentaryPage from "./components/DocumentalsPage/DocumentalsPage";
import BooksPage from "./components/BooksPage/BooksPage";
import PodcastPage from "./components/PodcastPage/PodcastPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/searchPage/searchPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <TopStories />
              <ArticleShowcase title="BOOKS" />
              <Podcast />
              <Museum />
              <Columns />
              <Footer />
            </>
          }
        />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/museum" element={<MuseumPage />} />
        <Route path="/documentaries" element={<DocumentaryPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/podcasts" element={<PodcastPage></PodcastPage>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
