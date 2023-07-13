import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
