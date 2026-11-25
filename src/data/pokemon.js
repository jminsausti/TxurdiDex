import planta from '../assets/planta.png'
import fuego from '../assets/fuego.png'
import agua from '../assets/agua.png'
import electrico from '../assets/electrico.png'

// Cada número de Pokédex identifica un registro. Las imágenes forman parte del proyecto.
export const pokemonIniciales = [
  { id: 1, nombre: 'Bulbasaur', tipos: ['Planta', 'Veneno'], imagen: planta },
  { id: 4, nombre: 'Charmander', tipos: ['Fuego'], imagen: fuego },
  { id: 7, nombre: 'Squirtle', tipos: ['Agua'], imagen: agua },
  { id: 25, nombre: 'Pikachu', tipos: ['Eléctrico'], imagen: electrico },
]
