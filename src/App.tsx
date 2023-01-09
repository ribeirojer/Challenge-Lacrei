import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
