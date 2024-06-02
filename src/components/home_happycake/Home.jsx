import React from 'react'
function Home() {

    const textoEnNegrita = <strong>Happy Cake</strong>;

  return (
    <div className='containerHome'>
       <h1>Bienvenido a {textoEnNegrita}</h1>
        <p>El lugar de los pasteles felices</p>
        <img className='img' src="https://i.pinimg.com/564x/fb/40/e9/fb40e9b897c1ae63708170a49fa70ae2.jpg" />

        
      
    </div>
  )
}

export default Home
