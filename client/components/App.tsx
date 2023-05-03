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
        <div className="article">
          <a
            target="_blank"
            href="https://github.com/users/sarah-lewis-1808/projects/1/views/1?layout=board&visibleFields=%5B%22Title%22%2C%22Status%22%2C%22Labels%22%5D"
            rel="noreferrer"
          >
            {`This portfolio is a work in progress - follow the process HERE!`}
          </a>
        </div>
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
