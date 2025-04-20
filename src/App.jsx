import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChampionList from './components/ChampionList'
import Sidebar from './components/Sidebar'

//routing
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Quiz'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div id='main' className='w-full'>
        <Sidebar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            {/* Will add more routes as needed */}
        </Routes>
      </div>
  )
}

export default App
