import HomePageResponseMock from "../../../../mock/pages/HomePageResponseMock.json";

class HomePageService {
  public static async getLayout(): Promise<{}> {
    return HomePageResponseMock;
  }
}

export default HomePageService;
