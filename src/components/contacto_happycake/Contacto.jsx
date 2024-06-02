
import React from 'react'

function Contacto() {
  return (
    <div>
      <div className='tituloContacto'>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      </div>
      <div className='detalleContacto'>
           <h2>Correo:</h2>
           <input className='inputCorreo' placeholder='name@example.com'></input>
           <h2>Descripción:</h2>
           <input className='inputDescripcion'></input>
      </div>
    </div>
  )
}

export default Contacto
