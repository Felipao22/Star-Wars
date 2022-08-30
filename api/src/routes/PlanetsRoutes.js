const { Router } = require('express');
const { getPlanets, getPlanetsId } = require('../controllers/PlanetsCrontrollers');

const router = Router();

router.get('/', async (req, res) => {
    let {page} = req.query
    if(!page) {
        page = 1
    }
    let allPlanets = await getPlanets(page)
    res.json(allPlanets)
});

router.get('/:id', async(req, res) => {
    let {id} = req.params;
    try {
        let planetInfo = await getPlanetsId(id)
        res.status(200).json(planetInfo)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;