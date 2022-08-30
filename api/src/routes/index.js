const {Router} = require('express');
const CharacterRoutes = require('./CharacterRoutes');
const PlanetsRoutes = require('./PlanetsRoutes')

const router = Router();

router.use('/characters', CharacterRoutes);
router.use('/planets', PlanetsRoutes);

module.exports = router;