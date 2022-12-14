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

//Routes for user information
app.get("/:id", (req, res)=> {
    let dataObj = {}
    knex("users")
        .where("user_id", req.params.id)
        .then((data) => {
            dataObj =  data[0]; //append user info to res. object
            return /*set up promise*/ knex('restaurants').where("user_id", req.params.id) /*search for all restaurants with user id*/
    }).then(data=>{
        dataObj.restaurants = data
        res.status(200).json(dataObj);
    })
    .catch((err) => {
        res.status(400).send(`error retrieving user data`)
    }
    );
});
app.put('/:id', (req, res) => {
    knex("users")
        .where("user_id", req.params.id)
        .update(req.body)
        .then((data) => {
            res.status(200).send(`User stats are updated`);
        });
})


//Routes to get the menu
app.get("/:id/menu", (req, res)=> {
    knex("categories")
        .where("restaurant_id", req.params.id)
        .then((data) => {
            res.status(200).send(data)
        })
    .catch((err) => {
        res.status(400).send(`error`)
    }
    );
});
app.get('/items/:category_id', (req,res)=> {
    knex('items')
        .where("category_id", req.params.category_id)
        .then((data) => {
            res.status(200).send(data)
        })
})


//Routes for all the tables data for all the tables
app.get('/:shiftId/tables', (req, res) => {
    knex('tables')
        .where('shift_id', req.params.shiftId)
        .then((data) => {
            res.status(200).send(data)
        })
})
app.post('/shift/tables', (req, res) => {
    if (
        !req.body.table_number ||
        !req.body.table_seats 
    ) {
        res.status(400).send("Please provide everything in the field!");
    } else {
        knex("tables")
            .insert({table_id: uuid(), ...req.body })
            .then(() => {
                res.status(201).send("Table created succesfully");
            });
    }
})



//Routes for all the tables data for single table
app.get('/tables/:tableId', (req, res) => {
    knex('tables')
        .where('table_id', req.params.tableId)
        .then((data)=> {
            res.status(200).send(data)
        })
}) 
app.delete('/tables/:tableId', (req,res) => {
    knex("tables")
        .where("table_id", req.params.tableId)
        .del()
        .then((data) => {
            res.status(200).send(`Table deleted`);
        })
        .catch((error) => {
            res.status(500).send(`Can not delete Table`);
        });
})



//Routes for all the shift data
app.get('/:id/shift', (req, res) => {
    knex('shifts')
        .where('user_id', req.params.id)
        .then((data) => {
            res.status(200).send(data)
        })
})
app.put('/:id/shift', (req, res) =>{
    knex("shifts")
    .where("user_id", req.params.id)
    .update(req.body)
    .then((data) => {
        res.status(200).send(`The shift stats are updated`);
    });
})
app.post('/:id/:rId/shift', (req, res) => {
    const newShift = {
        shift_id: uuid(),
        user_id: req.params.id,
        shift_sales: 0,
        shift_closedTables: 0,
        shift_tips: 0,
        restaurant_id: req.params.rId
    }
    knex("shifts")
        .insert(newShift)
        .then(() => {
            res.status(201).send("Shift Started");
        });
})
app.delete('/:id/shift/:shiftId', (req,res)=> {
    knex("shifts")
        .where("shift_id", req.params.shiftId)
        .del()
        .then((data) => {
            res.status(200).send(`Shift ${req.params.shiftId} is deleted`);
        })
        .catch((error) => {
            res.status(500).send(`Can not delete Shift ${req.params.id}`);
        });
})


//Routes for all the order data 
app.delete('/order/:orderId', (req,res)=>{
    knex('order')
        .where("orderItem_id", req.params.orderId)
        .del()
        .then((data) => {
            res.status(200).send(`Order deleted`);
        })
        .catch((error) => {
            res.status(500).send(`Order cannot be deleted`);
        });
})
app.get('/table/:tableId/order', (req, res) => {
    knex('order')
        .where('table_id', req.params.tableId)
        .then((data)=> {
            res.status(200).send(data)
        })
})
app.post('/table/:tableId/order', (req, res) => {
    knex("order")
        .insert({orderItem_id: uuid(), ...req.body})
        .then(() => {
            res.status(200).send("order posted succesfully")
        });
})


///start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});