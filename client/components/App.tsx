import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import Navbar from './Navbar'
import Header from './Header'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFruits())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="app">
        <Header />
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
