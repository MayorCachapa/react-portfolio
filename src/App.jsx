import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
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
          <Route path='about' element={<About />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
