//~====================================
//&             Requirements
//~====================================
const express = require("express");
const itemsRouter = express.Router()
const itemModel = require('../schemas/itemSchema')




//~========================
//&          GET
//~========================
itemsRouter.get("/", async (req, res, next) => {
    try {

        //? get all items from DB
        const items = await itemModel.find({})

        res.json({
            items
        })


    } catch (error) {
        console.log('Error while retrieving items: ' + error)
        res.json({
            error: true,
            msg: 'Error while retrieving items'
        })
    }
});


//~========================
//&          POST
//~========================
itemsRouter.post("/search", async (req, res, next) => {
    try {
        //? destructure req.body
        const { name } = req.body


        //? get item from the DB based on item name
        const item = await itemModel.find({ name: new RegExp(`^${name}$`, "i") })

        res.json({
            item
        })


    } catch (error) {
        console.log('Error while searching for item: ' + error)
        res.json({
            error: true,
            msg: 'Error while searching for item'
        })
    }
});



//~========================
//&          Exports
//~========================
module.exports = itemsRouter;
