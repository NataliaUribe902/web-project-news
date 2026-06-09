import CategoryPage from "../../components/CategoryPage/CategoryPage";
import doc1 from "../../images/documentalsPage1.jpg";
import doc2 from "../../images/documentalsPage2.jpg";
import doc3 from "../../images/documentalsPage3.jpg";
import doc4 from "../../images/documentalsPage4.jpg";
import doc5 from "../../images/documentalsPage5.jpg";
import doc6 from "../../images/documentalsPage6.jpg";

function DocumentalsPage() {
  return (
    <CategoryPage
      title="DOCUMENTARIES"
      newsQuery="documentary"
      showcaseTitle="RELATED FILMS"
      images={[doc1, doc2, doc3, doc4, doc5, doc6]}
    />
  );
}

export default DocumentalsPage;
