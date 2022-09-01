const axios = require("axios");

async function getAllStarships(page) {
  try {
    const starships = await axios.get(
      `https://swapi.dev/api/starships/?page=${page}`
    );
    const info = starships.data.results;
    const InfoMap = await Promise.all(
      info?.map(async (e) => {
        //films
        let films = await Promise.all(
          e.films.map(async (url) => {
            const allFilms = await axios(url);
            return allFilms.data.title;
          })
        );
        //pilots
        let pilots = await Promise.all(
          e.pilots.map(async (p) => {
            const allPilots = await axios(p);
            return allPilots.data.name;
          })
        );

        let imgUrlSplit = e.url.split("/");
        let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
        let baseImgUrl =
          "https://starwars-visualguide.com/assets/img/starships/";

        return {
          id: parseInt(idFromUrl),
          name: e.name,
          image: baseImgUrl + `${idFromUrl}.jpg`,
          cargo_capacity: e.cargo_capacity,
          consumables: e.consumables,
          cost_in_credits: e.cost_in_credits,
          crew: e.crew,
          films: films,
          length: e.length,
          manufacturer: e.manufacturer,
          model: e.model,
          url: e.url,
          passengers: e.passengers,
          pilots: pilots,
        };
      })
    );
    return InfoMap;
  } catch (error) {
    console.log("error in get all starships", error);
  }
}
async function getStarshipById(id) {
  try {
    const searchStarship = await axios.get(
      `https://swapi.dev/api/starships/${id}`
    );

    return searchStarship.data;
  } catch (error) {
    console.log("error en get by id", error);
  }
}

module.exports = {
  getStarshipById,
  getAllStarships,
};
