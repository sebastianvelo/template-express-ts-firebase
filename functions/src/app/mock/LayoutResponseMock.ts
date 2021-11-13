import AccountPageMock from "./pages/AccountPageMock";
import HomePageMock from "./pages/HomePageMock";

export default {
  navigation: {
    header: "Tailwind!",
    actions: [
      {
        content: "Home",
        route: "/home"
      },
      {
        content: "Home",
        route: "/home"
      },
      {
        content: "Home",
        route: "/home"
      }
    ],
    menu: {
      options: [
        {
          route: "/profile",
          content: "Profile"
        },
        {
          route: "/account",
          content: "Account"
        }
      ],
      toggler: {
        alt: "https://picsum.photos/200",
        src: "https://picsum.photos/200"
      }
    }
  },
  main: {
    pages: [HomePageMock, AccountPageMock]
  },
  footer: {
    author: {
      name: "Sebastian Velo",
      linkedin: "https://www.linkedin.com/in/sebastian-velo/"
    }
  }
};
