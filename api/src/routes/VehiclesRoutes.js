const { Router } = require('express');
const { getVehicles, getVehiclesId } = require('../controllers/VehiclesControllers');


const router = Router();

router.get('/', async (req, res) => {
    let {page} = req.query
    if(!page) {
        page = 1
    }
    let allVehicles = await getVehicles(page)
    res.json(allVehicles)
});

router.get('/:id', async(req, res) => {
    let {id} = req.params;
    try {
        let vehicleInfo = await getVehiclesId(id)
        res.status(200).json(vehicleInfo)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;