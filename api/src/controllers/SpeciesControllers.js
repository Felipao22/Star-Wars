const axios = require("axios");

async function getAllSpecies(page) {
  try {
    const species = await axios(
      `https://swapi.dev/api/species/?page=${page}`
    );
    const info = species.data.results;
    const speciesMap = await Promise.all(
      info?.map(async (e) => {
        //homeworld
        // let world = await axios(e.homeworld);
        // let worldInfo = world?.data;
        // console.log('esto es worldInfo',worldInfo.name)
        //films
        let films = await Promise.all(
          e.films.map(async (url) => {
            const allFilms = await axios(url);
            return allFilms.data.title;
          })
        );
        //people
        let people = await Promise.all(
          e.people.map(async (p) => {
              const allPeople = await axios(p);
              return allPeople.data.name
          })
      );
        //images
        let imgUrlSplit = e.url.split("/");
        let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
        let baseImgUrl = "https://starwars-visualguide.com/assets/img/species/";
    
        return {
          id: parseInt(idFromUrl),
          classification: e.classification,
          designation: e.designation,
          average_height: e.average_height,
          skin_colors: e.skin_colors,
          hair_colors: e.hair_colors,
          eye_colors:e.eye_colors,
          average_lifespan: e.average_lifespan,
          language: e.language,
          homeworld: e.homeworld,
          films: films ? films : 'n/a',
          people: people ? people: 'n/a',
          image: baseImgUrl + `${idFromUrl}.jpg`,
    
        };
      })); 

    return speciesMap;
  } catch (error) {
    console.log("error en el controler species", error);
  }
}

async function getSpeciesById(id) {
  try {
    const specie = await axios.get(`https://swapi.dev/api/species/${id}`);
    const info = specie.data;

    let imgUrlSplit = info.url.split("/");
    let idFromUrl = imgUrlSplit[imgUrlSplit.length - 2];
    let baseImgUrl = "https://starwars-visualguide.com/assets/img/species/";

    const allInfo = {
      ...info,
      image: baseImgUrl + `${idFromUrl}.jpg`,
      id: parseInt(idFromUrl),
    };


    return allInfo;
  } catch (error) {
    console.log("error en get species by id", error);
  }
}

module.exports = {
  getAllSpecies,
  getSpeciesById,
};