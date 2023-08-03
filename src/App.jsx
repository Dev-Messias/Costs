import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'


//importando as paginas
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';


function App() {

  return (
    <Router>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </div>

      <Container customClass="min-height" >
        <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/company' element={< Company />} />
            <Route path='/contact' element={< Contact />} />
            <Route path='/newproject' element={< NewProject />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  )
}

export default App
