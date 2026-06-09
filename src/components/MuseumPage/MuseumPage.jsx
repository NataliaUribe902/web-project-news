import CategoryPage from "../../components/CategoryPage/CategoryPage";

import column1 from "../../images/columnPage1.jpg";
import column2 from "../../images/columnPage2.jpg";
import column3 from "../../images/ColumnPage3.jpg";
import column4 from "../../images/ColumnPage4.jpg";
import column5 from "../../images/ColumnPage5.jpg";
import column6 from "../../images/ColumnPage6.jpg";

function MuseumPage() {
  return (
    <CategoryPage
      title="MUSEUM & HERITAGE"
      newsQuery="museum"
      showcaseTitle="RELATED BOOKS"
      images={[column1, column2, column3, column4, column5, column6]}
    />
  );
}

export default MuseumPage;
