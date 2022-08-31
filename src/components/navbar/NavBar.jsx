import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
                     <button>Personajes</button>
                 </Link>
          <Link to='/planets'>
                     <button>Planets</button>
                 </Link>
                 <Link to='/vehicles'>
                 <button>
                 Vehicles
             </button>
                 
                 </Link>
             <Link to='/starships'>
                 <button>Starships</button>
                 </Link>
             <Link to='/species'>
                 <button>Species</button>
 
                 </Link>
                 <Link to='/films'>
                 <button>Films</button>
 
                 </Link>
          </div>
  )
}
