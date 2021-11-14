import Widget from "../../../common/widget/Widget";
import WidgetPage from "../../../common/widget/WidgetPage";

interface TabsProps {
  tabs?: {
    header: string;
    content: any;
  }[];
}

const getTabs = Widget.builder<TabsProps>(`tabs`).setData({
  tabs: [
    {
      header: "Tab 1",
      content: "Tab 1 content"
    },
    {
      header: "Tab 2",
      content: "Tab 2 content"
    }
  ]
});

const getHomePage = WidgetPage.builder("view")
  .setRoute(`/home`)
  .addChild(getTabs);

export default getHomePage;
