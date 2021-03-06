//get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`; 

    const response = await fetch(base + query);
    const data = await response.json();

  return data[0];
};
//template string ``

// get city information
const key = 'hwtW5gUgU8Xvf7NYjAXohmc5NM0nWto0';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity("london").then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data.WeatherText)
//     })
//     .catch(err => console.log(err));

/*
getWeather("328328")
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
  
//     const response = await fetch(base + query);
//     const data = await response.json();
  
//     return data[0];
  
//   };
  
//   getCity('manchester')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));