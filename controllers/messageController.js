const db = require("../db/queries");

async function getAllmessages(req, res){
    
    const messages = await db.getAllMessages();
    if(messages.length === 0){
        res.send('NO MESSAGES AT THE MOMENT!');
    }
    console.log(messages);
    res.render("index", {'messages': messages});
}

async function postMessage (req, res) {
    let author = req.body.author;
    let message = req.body.message;

    await db.insertMessages({ text: message, username: author, added: new Date()});
    res.redirect("/");
}

async function getDetails (req, res)  {
    
    const messageId = req.params.id;
    const messages = await db.getAllMessages();
    const message = messages[messageId]
    console.log(message)
    if(!message){
        return res.status(404).send("MESSAGE NOT FOUND");
    }

    res.render("details", { message: message});
}

module.exports = {
    getAllmessages,
    postMessage,
    getDetails
}