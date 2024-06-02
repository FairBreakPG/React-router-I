import './App.css'
import {Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav'
import Contacto from './components/contacto_happycake/Contacto'
import Home from './components/home_happycake/Home'
function App() {

  return (
    <>
    <Nav />

    <Routes>
        <Route path="/Home"  element={ <Home/>}   />
        <Route path="/Contacto"  element={  <Contacto/>}   />
    </Routes>
    
    </>
  )
}

export default App
