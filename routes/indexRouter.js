
const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {'messages': messages});
});

indexRouter.get("/details/:id", (req, res) => {
    const messageId = req.params.id;
    const message = messages[messageId];

    if(!message){
        return res.status(404).send("MESSAGE NOT FOUND");
    }

    res.render("details", { message: message});
})

indexRouter.post("/new", (req, res) => {

    let author = req.body.author;
    let message = req.body.message;

    messages.push({ text: message, user: author, added: new Date()});
    res.redirect("/");
});

module.exports = indexRouter;