import Widget from "../../../common/widget/Widget";
import WidgetPage from "../../../common/widget/WidgetPage";
import TextContentProps from "../../../model/common/util/TextContentProps";

const getTitle = Widget.builder<TextContentProps>(`title`).setData({
  content: "Home page"
});

const getHomePage = WidgetPage.builder("view")
  .setRoute(`/home`)
  .addChild(getTitle);

export default getHomePage;
