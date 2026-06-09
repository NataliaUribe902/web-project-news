import CategoryPage from "../../components/CategoryPage/CategoryPage";
import doc1 from "../../images/DocumentalsPage1.jpg";
import doc2 from "../../images/DocumentalsPage2.jpg";
import doc3 from "../../images/DocumentalsPage3.jpg";
import doc4 from "../../images/DocumentalsPage4.jpg";
import doc5 from "../../images/DocumentalsPage5.jpg";
import doc6 from "../../images/DocumentalsPage6.jpg";

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
