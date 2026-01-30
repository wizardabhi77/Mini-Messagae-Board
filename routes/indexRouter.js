
const { Router } = require("express");

const messageController = require("../controllers/messageController");

const indexRouter = Router();



indexRouter.get("/", messageController.getAllmessages);

indexRouter.get("/details/:id", messageController.getDetails)

indexRouter.post("/new", messageController.postMessage);

module.exports = indexRouter;