import planta from '../assets/planta.png'
import fuego from '../assets/fuego.png'
import agua from '../assets/agua.png'
import electrico from '../assets/electrico.png'
import normal from '../assets/normal.png'
import bicho from '../assets/bicho.png'
import roca from '../assets/roca.png'
import fantasma from '../assets/fantasma.png'

// Cada número de Pokédex identifica un registro. Las imágenes forman parte del proyecto.
export const pokemonIniciales = [
  { id: 1, nombre: 'Bulbasaur', tipos: ['Planta', 'Veneno'], imagen: planta },
  { id: 4, nombre: 'Charmander', tipos: ['Fuego'], imagen: fuego },
  { id: 7, nombre: 'Squirtle', tipos: ['Agua'], imagen: agua },
  { id: 25, nombre: 'Pikachu', tipos: ['Eléctrico'], imagen: electrico },
  { id: 133, nombre: 'Eevee', tipos: ['Normal'], imagen: normal },
  { id: 10, nombre: 'Caterpie', tipos: ['Bicho'], imagen: bicho },
  { id: 74, nombre: 'Geodude', tipos: ['Roca', 'Tierra'], imagen: roca },
  { id: 92, nombre: 'Gastly', tipos: ['Fantasma', 'Veneno'], imagen: fantasma },
]
