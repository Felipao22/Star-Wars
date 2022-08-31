const {Router} = require('express');
const CharacterRoutes = require('./CharacterRoutes');
const PlanetsRoutes = require('./PlanetsRoutes')
const VehiclesRoutes = require('./VehiclesRoutes.js')

const router = Router();

router.use('/characters', CharacterRoutes);
router.use('/planets', PlanetsRoutes);
router.use('/vehicles', VehiclesRoutes);

module.exports = router;