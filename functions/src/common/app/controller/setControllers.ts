import express from "express";
import LayoutController from "../../../endpoints/layout/controller/LayoutController";
import HomePageController from "../../../endpoints/pages/home/controller/HomePageController";
import Controller from "../../controller/Controller";

const setControllers = (app: express.Application) => {
    const controllers: Array<Controller> = [];
    controllers.push(new LayoutController(app));
    controllers.push(new HomePageController(app));
    return controllers;
}

export default setControllers;