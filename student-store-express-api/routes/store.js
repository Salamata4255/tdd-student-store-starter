const express = require("express")
const router = express.Router()
const Store = require("../models/store")


router.get("/", function(req,res,next){
    try{
        res.status(200).json({
            products: Store.listProducts()
        })
    } catch(err) {
        next(err)
    }
    

})
router.get("/:productId", function(req,res,next){
    
    try{
        const {productId} = req.params
    res.status(200).json({
        product: Store.fetchProducts(productId)
    })
    } catch(err){
        next(err)
    }
})

router.post("/", function(req,res, next){
    try
    {
        const shoppingCart = req.body.shoppingCart
    const user = req.body.user
    console.log(req.body)
    res.status(201).json({
        purchase : Store.createOrder(shoppingCart, user)
    })
    }catch(err){
        next(err)
    }
})


module.exports = router