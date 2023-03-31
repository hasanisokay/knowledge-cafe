import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BlogCard from './components/BlogCards/BlogCard'
import Blog from './components/Blog/Blog'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <BlogCard></BlogCard>
      <Blog></Blog>
    </div>
  )
}

export default App
