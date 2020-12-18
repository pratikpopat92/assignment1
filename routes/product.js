const router=require('express').Router();
const productController=require('../controllers/product');

router.get('/',productController.getProducts);

router.get('/:id',productController.getProductByCategory);

router.post('/new',productController.addProduct);

router.put('/:id',productController.updateProduct);

module.exports=router;