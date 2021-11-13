import LayoutResponseMock from "../../mock/LayoutResponseMock";

class LayoutService {
  public static async getLayout(): Promise<{}> {
    return LayoutResponseMock;
  }
}

export default LayoutService;
