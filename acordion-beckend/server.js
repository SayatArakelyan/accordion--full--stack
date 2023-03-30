const express = require('express')
const port = 4444
const app = express()
const cors = require("cors")
const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mydb', null, null, {dialect: 'sqlite', storage: 'database.db'})
// const {seed} = require("./seed/coutriesSeed")
const {db} = require("./seed/coutriesSeed")

app.use(express.json())

app.use(cors())


// const Country = sequelize.define('country',{
//     id:{
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     name: Sequelize.STRING,
//     capital: Sequelize.STRING,
//     allowNull: false,
// })
//
// Country.sync()
//     .then(() => console.log('Table created successfully'))
//     .catch((err) => console.log('Error creating table:', err));
//
// app.get("/countries", (req,res)=>{
//
//
// } )


let count = 0
app.get("/countries", (req, res) => {
    db.get('SELECT COUNT() AS count FROM Countries', (err, data) => {
        count = data.count
    })
    const limit = req.query.limit
    const offset = req.query.offset
    db.all("SELECT * FROM Countries limit ? offset ? ", [limit, offset], (err, data) => {
        if (err) {
            res.send("something went wrong ");
        }
        res.send({data, count});
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})