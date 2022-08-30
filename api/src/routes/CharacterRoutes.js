const { Router } = require('express');
const { getCharacters, getCharactersId } = require('../controllers/CharacterControllers');

const router = Router();

router.get('/', async (req, res) => {
    let {page} = req.query
    if(!page) {
        page = 1
    }
    let allCharacters = await getCharacters(page)
    res.status(200).json(allCharacters)
});

router.get('/:id', async (req, res) => {
    let {id} = req.params;  
    try {
        let charInfo = await getCharactersId(id)
        res.status(200).json(charInfo)
    } catch {
        console.log('aca el erorr' + error)
        
    }
})

module.exports = router;