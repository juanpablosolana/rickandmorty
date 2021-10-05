const cambiarPersonaje = (img,name) => {
  return(
    <img
    src={img ? img : "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
    alt={name ? name : "Rick Sanchez"}
  />
  )
};
export default cambiarPersonaje