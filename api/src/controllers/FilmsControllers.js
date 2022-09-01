const axios = require("axios");

async function getFilmTitle() {
    try {
      const films = await axios(`https://swapi.dev/api/films/`);
      const info = films.data.results;
      const map = info?.map((e) => {
        let imgUrlSplit = e.url.split("/");
        let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
        let baseImgUrl = "https://starwars-visualguide.com/assets/img/films/";
          return {
            id: parseInt(idFromUrl),
            title: e.title,
            image: baseImgUrl + `${idFromUrl}.jpg`,
          }
      })
  
      return map;
    } catch (error) {
      console.log("error in get films title controller", error);
    }
  }



async function getAllFilms() {
  try {
    const films = await axios(`https://swapi.dev/api/films/`);
    const info = films.data.results;

    const filmsMap = await Promise.all(
      info?.map(async (e) => {
        //characters
        let characters = await Promise.all(
          e.characters.map(async (url) => {
            const allCharacters = await axios(url);
            return allCharacters.data.name;
          })
        );
        //planets
        let planets = await Promise.all(
          e.planets.map(async (url) => {
            const allPlanets = await axios(url);
            return allPlanets.data.name;
          })
        );
        //starships
        let starships = await Promise.all(
          e.starships.map(async (url) => {
            const allStarships = await axios(url);
            return allStarships.data.name;
          })
        );
        //vehicles
        let vehicles = await Promise.all(
          e.vehicles.map(async (url) => {
            const allVehicles = await axios(url);
            return allVehicles.data.name;
          })
        );
        //species
        let species = await Promise.all(
          e.species.map(async (url) => {
            const allSpecies = await axios(url);
            return allSpecies.data.name;
          })
        );

        let imgUrlSplit = e.url.split("/");
        let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
        let baseImgUrl = "https://starwars-visualguide.com/assets/img/films/";

        return {
          id: parseInt(idFromUrl),
          title: e.title,
          characters: characters,
          episode_id: e.episode_id,
          opening_crawl: e.opening_crawl,
          director: e.director,
          producer: e.producer,
          release_date: e.release_date,
          planets: planets ? planets : "n/a",
          starships: starships ? starships : "n/a",
          vehicles: vehicles ? vehicles : "n/a",
          species: species ? species : "n/a",
          image: baseImgUrl + `${idFromUrl}.jpg`,
        };
      })
    );

    return filmsMap;
  } catch (error) {
    console.log("error in get films controller", error);
  }
}

async function getFilmById(id) {
    try {
      const films = await axios(`https://swapi.dev/api/films/${id}`);
      const info = films.data;
  
      return info;
    } catch (error) {
      console.log("error in get filmsId controller", error);
    }
  }

module.exports = {
  getAllFilms,
  getFilmById,
  getFilmTitle
};
