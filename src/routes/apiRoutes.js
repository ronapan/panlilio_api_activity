const express = require('express');
const router = express.Router();

//import the controller
const {
    getAllDishes,
    createDish,
    getDishById, 
    updateDish,
    deleteDish,
    createChef,
} = require ('../controllers/dishController')

//1. if user goes to GET / (show menu). ask chef to getAllDishes
router.get('/dishes', getAllDishes);

//2. if user send POST / (new order). ask chef to createDish
router.post('/dishes', createDish);

//3. if user goes to GET //:id (Ask for specific meal). ask chef to updateDish
router.put('/dishes/:id', getDishById);

//4. if user sends PUT /:id (chngae meal). ask chef to updateDish
router.put('/dishes/:id', updateDish);

//5. if user send DELETE /:id (Cancel meal). ask chef to deleteDish
router.delete('/dishes/:id', deleteDish);

//6. Create a new chef
router.post('/chefs', createChef);

module.exports = router;
