const pool = require("./db.js");
const express = require("express")
require("dotenv").config();



const app = express();

const PORT = 3000;

app.use(express.json());




app.get("/players", async(req,res) => {

    const result = await pool.query("SELECT * FROM players");
    res.json(result.rows);
})

app.get("/inventory/:playerId", async (req,res) => {
    const playerId = req.params.playerId;
   const result = await pool.query(`SELECT inventory.id, inventory.quantity, inventory.player_id, items.name AS item_name
    FROM inventory
    JOIN items on inventory.item_id = items.id
    WHERE inventory.player_id = $1` ,
        [playerId]
    )

    res.json(result.rows)
});




app.listen(PORT, () => {
console.log(`server running on port ${PORT}`)

})