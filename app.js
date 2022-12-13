require("dotenv").config();
const { v4: uuid } = require("uuid");
const express = require ('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;
const knex = require("knex")(require("./knexfile"));

app.use(cors());
app.use(express.json());

// ROUTES
app.get("/:id", (req, res)=> {
    ///creates object for response
    let dataObj = {}
    knex("users")
        //search user by id in users
        .where("id", req.params.id)
        .then((data) => {
            dataObj =  data[0]; //append user info to res. object
            return /*set up promise*/ knex('restaurants').where("user_id", req.params.id) /*search for all restaurants with user id*/
    }).then(data=>{
        /*putting array of restaurants to user data*/
        dataObj.restaurants = data
        res.status(200).json(dataObj);
    })
    .catch((err) => {
        console.log(err)
        res.status(400).send(`error retrieving user data`)
    }
    );
});
app.get("/:id/menu", (req, res)=> {
    knex("categories")
        .where("restaurant_id", req.params.id)
        .then((data) => {
            res.status(200).send(data)
        })
    .catch((err) => {
        res.status(400).send(`error retrieving user data`)
    }
    );
});
app.get('/:id/tables', (req, res) => {
    knex('tables')
        .where('restaurant_id', req.params.id)
        .then((data) => {
            res.status(200).send(data)
        })
})
app.post('/:id/tables', (req, res) => {
    const newTable = {
        table_number: req.body.table_number, 
        table_seats: req.body.table_seats, 
        restaurant_id: req.body.restaurant_id
    }
    if (
        !req.body.table_number ||
        !req.body.table_seats 
    ) {
        res.status(400).send("Please provide everything in the field!");
    } else {
        knex("tables")
            .insert({table_id: uuid(), ...req.body })
            .then(() => {
                res.status(201).send("Hello world");
            });
    }
})
app.get('/items/:category_id', (req,res)=> {
    knex('items')
        .where("category_id", req.params.category_id)
        .then((data) => {
            res.status(200).send(data)
        })
})

///start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});