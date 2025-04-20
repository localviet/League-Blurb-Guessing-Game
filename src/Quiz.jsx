import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Quiz.css'
import ChampionList from './components/ChampionList'
import ChampionData from './data/champion.json';
import Sidebar from './components/Sidebar'
import Game from './components/Game.jsx'



function Quiz() {
    const [gameStarted, setGameStarted] = useState(false)

    const startGame = () => {
        setGameStarted(true)
    }

    return (
    <main className='flex'>
        <div id='main' className='w-full flex flex-col items-center mt-16'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-bold text-yellow-200 mb-12'>League of Legends Quiz</h1>
            </div>

            {gameStarted ? (
                <div>
                    <Game />
                    
                </div>
            ) : (
                <div className='w-[150px]'>
                    <button className='text-yellow-800 bg-blue-500 text-4xl w-full py-2 rounded-lg' onClick={startGame}>Play</button>
                </div>
            )}

        </div>
    </main>
    )
}   

export default Quiz