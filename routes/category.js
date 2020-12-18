const router=require('express').Router();
const categoryController=require('../controllers/category');

router.get('/',categoryController.getCategories);



router.post('/new',categoryController.addCategory);



module.exports=router;