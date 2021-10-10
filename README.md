## Rick and Morty API + ReactJS

<div className="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
  <div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2">
    <Image
      alt="Rick and Morty API + React"
      src="https://www.pablosolana.dev/_next/image?url=%2Fstatic%2Fimages%2FReactRickMortyAPI%2FReactRickMortyAPI.png&w=750&q=75"
      width={650}
      height={350}
    />
  </div>
  Te recomiendo [ver el proyecto](https://rickandmorty.pablosolana.dev/) antes de continuar.
</div>

**Recuerda importar axios**
Usamos creat-react-app para crear nuestra aplicación, para este ejercicio uso axios por lo que no debes olvidar instarlo.

```javascript
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Super from './components/Super'
import Grid from './components/Grid'
import Footer from './components/Footer'
import API from './services/api'
```

[La dodumentación de la api ](https://rickandmortyapi.com/).

```javascript
function App() {
  const [character, setCharacter] = useState([])
  const [characterTarget, setCharacterTarget] = useState('')
  const [page, setPage] = useState(1)
  const [statusOption, setStatusOption] = useState('')
  const [speciesOption, setSpeciesOption] = useState('')
  document.title = `${characterTarget.name || 'React Rick & Morty API'} | React Rick & Morty API`
}

export default App
```

Inicializamos los hooks:

**character** = Carga los datos del resultado de la petición a la API

**characterTarget** = Almacena los datos del personaje seleccionado

**page** = Controla la paginación

**speciesOption** = Filtrar por especie

**statusOption** = Almacena el estatus que seleccina el usuario para hacer el filtro de los personajes
Con el trucazo del document.title = `${characterTarget.name ||"React Rick & Morty API"} | React Rick & Morty API`; se actualiza el titulo de la página.

```javascript
useEffect(() => {
  window.scrollTo(0, 0)
  const getcharacter = async () => {
    await axios
      .get(`${API}${page}&status=${statusOption}&species=${speciesOption}`)
      .then(({ data }) => {
        setCharacter(data.results)
        setCharacterTarget(data.results[0])
      })
      .catch((err) => {
        setPage(1)
        console.log(err)
      })
  }
  getcharacter()
}, [page, statusOption, speciesOption])
```

El hook useEffect contrala las peticiones al sitio y solo refrescará la página cuando se cambie el estado de las variables.

```html
return (
<div className="App" id="top">
  <Super characterTarget="{characterTarget}" />
  <Grid
    character="{character}"
    setCharacterTarget="{setCharacterTarget}"
    characterTarget="{characterTarget}"
  />
  <footer
    setPage="{setPage}"
    page="{page}"
    statusOption="{statusOption}"
    setSpeciesOption="{setSpeciesOption}"
    setStatusOption="{setStatusOption}"
    setCharacterTarget="{setCharacterTarget}"
  />
</div>
);
```

Los datos llegan en un array y se mandan a los componentes hijos.

```javascript
const datos = JSON.parse(localStorage.getItem('user'))
const token = datos.token
const headers = `Bearer ${token}`

axios
  .get('http://localhost:3000/api/v1/cfdi', {
    headers: { Authorization: headers },
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
```

Te comparto [el código completo](https://github.com/juanpablosolana/rickandmorty).
Saludos.
