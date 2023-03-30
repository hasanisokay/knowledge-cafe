import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BlogCard from './components/BlogCards/BlogCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <BlogCard></BlogCard>
    </div>
  )
}

export default App
