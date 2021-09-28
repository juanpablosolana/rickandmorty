import axios from "axios";
const getData = () => {
  axios.get(`https://rickandmortyapi.com/api/character`)
    .then(res => {
      const persons = res.data.results;
    })
    .catch(err => {
      console.log(err);
    });
  }
export default getData;

