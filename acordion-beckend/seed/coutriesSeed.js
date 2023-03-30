const sqlite = require("sqlite3").verbose()

const db = new sqlite.Database("database.db")




// const {Country} = require("../model/countrySchema")

const countries = [{
    "name": "Afghanistan",
    "capital": "Kabul",

},
    {
        "name": "Aland Islands",
        "capital": "Mariehamn",

    },
    {
        "name": "Albania",
        "capital": "Tirana",

    }, {
        "name": "Algeria",
        "capital": "Algiers",

    },
    {
        "name": "American Samoa",
        "capital": "Pago Pago",

    },
    {
        "name": "Andorra",
        "capital": "Andorra la Vella",

    },
    {
        "name": "Angola",
        "capital": "Luanda",

    },  {
        "name": "Angola",
        "capital": "Luanda",

    },  {
        "name": "Angola",
        "capital": "Luanda",

    }]

function seed() {
    db.serialize(() => {
        db.run("DROP TABLE IF EXISTS Countries");

        db.run(
            "CREATE TABLE IF NOT EXISTS Countries (id INTEGER PRIMARY KEY, name TEXT, capital TEXT )"
        );

        countries.map((item) => {
            db.run("INSERT INTO Countries (name,capital)VALUES(?,?) ", [
                item.name,
                item.capital,
            ]);
        });
    });
}



seed()

module.exports = {db}

