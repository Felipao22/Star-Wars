const {Router} = require('express');
const CharacterRoutes = require('./CharacterRoutes');
const PlanetsRoutes = require('./PlanetsRoutes')
const VehiclesRoutes = require('./VehiclesRoutes.js')
const SpeciesRoutes = require('./SpeciesRoutes');
const StarshipsRoutes = require('./StarshipsRoutes');
const FilmsRoutes = require('./FilmsRoutes')


const router = Router();

router.use('/characters', CharacterRoutes);
router.use('/planets', PlanetsRoutes);
router.use('/vehicles', VehiclesRoutes);
router.use('/species', SpeciesRoutes);
router.use('/starships', StarshipsRoutes)
router.use('/films', FilmsRoutes)

module.exports = router;