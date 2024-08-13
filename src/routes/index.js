import express from "express";
import bookRoutes from "./bookRoutes.js";
import authorRoutes from "./authorRoutes.js";

const routes = (app) => {

    app.route("/").get((req, res) => res.status(200).send("Welcome to the homepage of Node.JS Express API"));

    app.use(express.json(), bookRoutes);

    app.use(express.json(), authorRoutes);
};

export default routes;