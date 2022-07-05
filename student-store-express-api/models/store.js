const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/error.js")

class Store {

    constructor(){
        this.super()
    }

    static listProducts(){
        // try {
            return storage.get("products")
        // } catch(error){
        //     throw new BadRequestError(error);
        // }
        
    }
    
    static fetchProducts(id){
        // try {
            return storage.get("products").find( products => id==products.id)
        // } catch(error){
        //     throw new BadRequestError(error);
        // }

    }


 static createOrder(shoppingCart, user){
   

        if(!user || !shoppingCart){
            throw new BadRequestError()
        }
        if (!user.hasOwnProperty('name') || !user.hasOwnProperty('email')){
            throw new BadRequestError()
        }

        const checkDuplicates = new Set(shoppingCart.map(item => item.itemId))
        if (shoppingCart.length > checkDuplicates.size){
            throw new BadRequestError()
        }

        var totalBefore = 0
        for (var i = 0; i < shoppingCart.length; i++){
            let price = Store.fetchProducts(shoppingCart[i].itemId)["price"]
            let quant = shoppingCart[i].quantity
            totalBefore += price * quant
        }
        let total = (totalBefore *1.0875).toFixed(2)
        let allPurchase = storage.get('purchases')
        const purchase ={
            id: allPurchase.length,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            total: total,
            createdAt: new Date().toLocaleString(),
            receipt:`Your receipt number is: ${storage.get("purchases").length } and your username is: ${user.name} with an email at ${user.email} for a total cost of $${total}`
        }
        
        storage.add('purchases', purchase)
        
        return purchase;
        

    }
   
}

module.exports = Store;