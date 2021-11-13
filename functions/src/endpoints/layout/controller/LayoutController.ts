import express, { Request, Response } from "express";
import Controller from "../../../common/controller/Controller";
import LayoutService from "../service/LayoutService";

class LayoutController extends Controller {
  constructor(app: express.Application) {
    super(app, "/layout");
  }

  setEndpoints() {
    this.setEndpoint("/").get((req: Request, res: Response) => {
      LayoutService.getLayout().then((layout) => {
        res.send(layout);
      });
    });

    return this.app;
  }
}

export default LayoutController;
