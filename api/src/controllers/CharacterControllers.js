const axios = require("axios");

async function getCharacters(page) {
  try {
    const characters = await axios(`https://swapi.dev/api/people?page=${page}`)
    const charactersInfo = characters.data.results;
    const infoMap = await Promise.all(
      charactersInfo?.map(async (e) => {
        //planet from url
        let world = await axios(e.homeworld)
        let worldInfo = world?.data;

        //vehicles from url
        let vehicles = await Promise.all(
          e.vehicles.map(async(url) => {
            const allVehicles = await axios(url)
            return allVehicles.data.name;
          })
        );

        //films
        let films = await Promise.all(
          e.films.map(async (url) => {
            const allFilms = await axios(url);
            return allFilms.data.title;
          })
        );

        //starships
        let starships = await Promise.all(
          e.starships.map(async (url) => {
            const allStarships = await axios(url);
            return allStarships.data.name
          })
        );

        //images
        let split = e.url.split('/')
        let idFromUrl = split[split.length - 2];
        let imgUrl = 'https://starwars-visualguide.com/assets/img/characters/'
        return {
          id: parseInt(idFromUrl),
          name: e.name,
          height: e.height,
          mass: e.mass,
          hair_color: e.hair_color,
          skin_color: e.skin_color,
          eye_color: e.eye_color,
          birth_year: e.birth_year,
          gender: e.gender,
          homeworld: worldInfo.name,
          vehicles: vehicles? vehicles: 'n/a',
          films: films ? films: 'n/a',
          starships: starships ? starships: 'n/a',
          photo: imgUrl + `${idFromUrl}.jpg`
        };
      }));
    return infoMap;
  } catch (error) {
    console.log(error);
  }
}

async function getCharactersId(id){
  try {
    const charactersId= await axios(`https://swapi.dev/api/people/${id}` )
      const charactersInfo = charactersId.data;
      return charactersInfo
      
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCharacters,
  getCharactersId
};
