const axios = require("axios");

async function getPlanets(page) {
try {
    const plantes = await axios(`https://swapi.dev/api/planets/?page=${page}`);
    const planetsInfo = plantes.data.results;
    const info = await Promise.all(
        planetsInfo?.map(async(e) => {

            //people from planets
            let people = await Promise.all(
                e.residents.map(async(p) => {
                    const allPeople = await axios(p);
                    return allPeople.data.name
                })
            )

            // //planets appearance in films
            let films = await Promise.all(
                e.films.map(async(url) => {
                  const allFilms = await axios(url);
                  return allFilms.data.title;
                })
              );
              let split = e.url.split('/')
              let idFromUrl = split[split.length - 2];
              let imgUrl = 'https://starwars-visualguide.com/assets/img/planets/'

              return{
                id: parseInt(idFromUrl),
                name: e.name,
                rotation_period: e.rotation_period,
                orbital_period: e.orbital_period,
                diameter: e.diameter,
                climate: e.climate,
                terrain: e.terrain,
                surface_water: e.surface_water,
                population: e.population,
                image: imgUrl + `${idFromUrl}.jpg`,
                residents: people ? people: 'n/a',
                films: films ? films: 'n/a',
              };
        }));
        return info;
} catch (error) {
    console.log(error)
}
}

async function getPlanetsId(id) {
    try {
        const planetsId = await axios(`https://swapi.dev/api/planets/${id}`)
        const plantesInfo = planetsId.data
        return plantesInfo;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPlanets,
    getPlanetsId
}