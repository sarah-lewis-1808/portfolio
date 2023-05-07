// import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Banner from './Banner'
import AddProject from './AddProject'
// import Admin from './Admin'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Contact />
        <Projects />
        <Banner />
        {/* <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes> */}
      </div>
    </>
  )
}

export default App
