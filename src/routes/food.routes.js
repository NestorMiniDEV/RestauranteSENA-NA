import { Router } from "express";
import multer from "multer";
import { addFood, editFood, removeFood, showFood, confirmEditFood } from '../controllers/food.controller.js'

const router = Router();
const uploadImage = multer({ dest: 'files/images/food'});

router.post('/food/add', uploadImage.single('foodImage') , addFood );
router.get('/food/edit/:id', editFood );
router.post('/food/edit/confirm/:id', confirmEditFood)
router.get('/food/remove/:id', removeFood );
router.get('/food', showFood );

export default router;