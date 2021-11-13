import LayoutResponseMock from "../../../mock/LayoutResponseMock.json";

class LayoutService {
  public static async getLayout(): Promise<{}> {
    return LayoutResponseMock;
  }
}

export default LayoutService;
