export default {
  id: "home",
  uiType: "view",
  route: "/",
  children: [
    {
      uiType: "tabs",
      data: {
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
      }
    }
  ]
};
