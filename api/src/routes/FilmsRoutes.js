const { Router } = require("express");
const { getAllFilms, getFilmById, getFilmTitle } = require("../controllers/FilmsControllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const films = await getAllFilms();

    res.json(films);
  } catch (error) {
    console.log("error in  films get / route", error);
  }
});

router.get("/title", async (req, res) => {
    try {
      const filmsTitle = await getFilmTitle();
  
      res.json(filmsTitle);
    } catch (error) {
      console.log("error in  films title get / route", error);
    }
  });

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {

    const films = await getFilmById(id);

    res.json(films);
  } catch (error) {
    console.log("error in  films get / route", error);
  }
});


module.exports = router;