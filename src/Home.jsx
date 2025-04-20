import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ChampionList from './components/ChampionList'
import Sidebar from './components/Sidebar'

//routing
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Quiz'


function Home() {
  const [count, setCount] = useState(0)
    
  return (
    <main className='flex'>

      <div id='main' className='w-full'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-bold text-yellow-200 mb-12'>League of Legends App</h1>
        </div>
        <div className='flex items-center justify-center'>
          < ChampionList />

        </div>
      </div>
    </main>
  )
}

export default Home
