import axios from "axios";
function getPersonajes(page) {
   return axios
    .get(`https://rickandmortyapi.com/api/character?page${page}`)
    .then((res) => {
      // console.log(res.data.results)
      return res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};
getPersonajes()
export default getPersonajes