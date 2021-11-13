import Widget from "./Widget";

class WidgetPage<Model> extends Widget<Model> {
  route?: string;

  static builder = (uiType: string) => new WidgetPage(uiType);

  setRoute(route: string) {
    this.route = route;
    return this;
  }
}

export default WidgetPage;
