const axios = require("axios");

async function getVehicles(page) {
try {
    const vehicles = await axios(`https://swapi.dev/api/vehicles/?page=${page}`);
    const vehiclesInfo = vehicles.data.results;
    const info = await Promise.all(
        vehiclesInfo?.map(async(e) => {

            //people from planets
            let pilots = await Promise.all(
                e.pilots.map(async(p) => {
                    const allPilots = await axios(p);
                    return allPilots.data.name
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
              let imgUrl = 'https://starwars-visualguide.com/assets/img/vehicles/'

              return{
                id: parseInt(idFromUrl),
                name: e.name,
               model: e.model,
               manufacturer: e.manufacturer,
               cost_in_credits: e.cost_in_credits,
               length: e.length,
               max_atmosphering_speed: e.max_atmosphering_speed,
               crew: e.crew,
               passengers: e.passengers,
               cargo_capacity: e.cargo_capacity,
               consumables: e.consumables,
               vehicle_class: e.vehicle_class,
                image: imgUrl + `${idFromUrl}.jpg`,
                pilots: pilots ? pilots: 'n/a',
                films: films ? films: 'n/a',
              };
        }));
        return info;
} catch (error) {
    console.log(error)
}
}

async function getVehiclesId(id) {
    try {
        const vehiclesId = await axios(`https://swapi.dev/api/vehicles/${id}`)
        const vehiclesInfo = vehiclesId.data
        return vehiclesInfo;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getVehicles,
    getVehiclesId
}