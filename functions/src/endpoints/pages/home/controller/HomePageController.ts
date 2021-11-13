import express, { Request, Response } from "express";
import Controller from "../../../../common/controller/Controller";
import HomePageService from "../service/HomePageService";

class HomePageController extends Controller {
  constructor(app: express.Application) {
    super(app, "/home-page");
  }

  setEndpoints() {
    this.setEndpoint("/").get((req: Request, res: Response) => {
      HomePageService.getLayout().then((page) => {
        res.send(page);
      });
    });

    return this.app;
  }
}

export default HomePageController;
