
const express = require('express')
const router = express.Router()
const {productService} = require('../services')
const Product = require('../models/product')



router.get('/', async (req,res)=>{

  try{
    const products = await productService.load()
    res.render('products', {products:products})

    }catch (e){
      throw new Error ('Product database cannot be loaded!')
    }

})

router.get('/:productId',async (req,res)=>{
  
  const product = await productService.find(req.params.productId)
 // if(!product) return res.status(404).send('Cannot find product') //***bu kısım promise handlinge takılıyor try catch calısmadı
  res.render('product',{product:product})
      //61599b3dcbd114d45f151b10 
})
  

router.post('/', async (req,res)=>{
  productService.insert(req.body) 
  res.send(req.body)
})

router.delete('/:productId', async (req,res)=>{
  await productService.removeBy('id',req.params.productId)
  res.send('OK')
})




   
module.exports = router