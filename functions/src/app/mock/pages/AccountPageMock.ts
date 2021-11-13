export default {
  uiType: "view",
  id: "account",
  route: "/account",
  children: [
    {
      uiType: "message",
      data: {
        content: "I'm a message",
        color: "info",
        quiet: false
      }
    }
  ]
};
