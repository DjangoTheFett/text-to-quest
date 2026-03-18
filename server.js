const pool = require("./db.js");
const express = require("express")
require("dotenv").config();
const cors = require("cors")



const app = express();

const PORT = 3000;
app.use(cors())
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



app.get("/players/:playerId/dialogue" , async (req,res) => {
const playerId = req.params.playerId


try {
const result = await pool.query(`SELECT dialogue_nodes.*
    FROM players
    JOIN dialogue_nodes
    On players.current_dialogue_id = dialogue_nodes.id
    WHERE players.id = $1`, [playerId])

    if (result.rows.length === 0){
       return res.status(404).json({error:"no date found"
        })
    } 

    res.json(result.rows[0]) 

} catch (err) {
    return res.status(505).json({error: "Server error"})

}

})


app.listen(PORT, () => {
console.log(`server running on port ${PORT}`)

})