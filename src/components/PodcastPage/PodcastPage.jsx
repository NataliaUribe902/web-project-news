import CategoryPage from "../../components/CategoryPage/CategoryPage";

import podcast1 from "../../images/podcastPage1.jpg";
import podcast2 from "../../images/podcastPage2.jpg";
import podcast3 from "../../images/podcastPage3.jpg";
import podcast4 from "../../images/podcastPage4.jpg";
import podcast5 from "../../images/podcastPage5.jpg";
import podcast6 from "../../images/podcastPage6.jpg";

function PodcastPage() {
  return (
    <CategoryPage
      title="PODCASTS"
      newsQuery="podcast"
      showcaseTitle="RECOMMENDED LISTENS"
      images={[podcast1, podcast2, podcast3, podcast4, podcast5, podcast6]}
    />
  );
}

export default PodcastPage;
