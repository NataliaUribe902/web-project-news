import { useParams } from "react-router-dom";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

import search1 from "../../images/searchpage1.jpg";
import search2 from "../../images/searchpage2.jpg";
import search3 from "../../images/searchpage3.jpg";
import search4 from "../../images/searchpage4.jpg";
import search5 from "../../images/searchpage5.jpg";
import search6 from "../../images/searchpage6.jpg";

function SearchPage() {
  const { query } = useParams();

  return (
    <CategoryPage
      title={`SEARCH: ${query}`}
      newsQuery={query}
      images={[search1, search2, search3, search4, search5, search6]}
    />
  );
}

export default SearchPage;
