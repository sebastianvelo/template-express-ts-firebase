import WidgetPage from "../../../common/widget/WidgetPage";
import TitleWidget from "../../widget/atomic/title/TitleWidget";

const getHomePage = WidgetPage.builder("view")
  .setRoute(`/home`)
  .addChild(TitleWidget({ content: "Home page" }));

export default getHomePage;
