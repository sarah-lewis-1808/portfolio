import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFruits())
  }, [dispatch])

  return (
    <>
      <article>
        <div className="article">This portfolio is a work in progress</div>
      </article>
      <Navbar />
      <Header />
      <div className="app">
        <div className="body">
          <About />
          <Contact />
          <Projects />
        </div>
        {/* <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
      </div>
    </>
  )
}

export default App
