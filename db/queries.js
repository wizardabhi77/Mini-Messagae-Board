const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessages(message) {
    await pool.query("INSERT INTO messages (text, username, added) values ($1,$2,$3)", [message.text,message.username,message.added]);
}



module.exports = {
    getAllMessages,
    insertMessages,
    
}