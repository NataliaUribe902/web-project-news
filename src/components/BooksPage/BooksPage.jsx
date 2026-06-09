import CategoryPage from "../../components/CategoryPage/CategoryPage";
import book1 from "../../images/booksPage1.jpg";
import book2 from "../../images/booksPage2.jpg";
import book3 from "../../images/booksPage3.jpg";
import book4 from "../../images/booksPage4.jpg";
import book5 from "../../images/booksPage5.jpg";
import book6 from "../../images/booksPage6.jpg";
function BooksPage() {
  return (
    <CategoryPage
      title="BOOKS"
      newsQuery="books"
      showcaseTitle="EDITOR'S PICKS"
      images={[book1, book2, book3, book4, book5, book6]}
    />
  );
}

export default BooksPage;
