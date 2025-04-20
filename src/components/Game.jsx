import React from 'react';
import { useState, useEffect } from 'react';
import ChampionData from '../data/champion.json';
const champions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios",
    "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar",
    "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko",
    "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna",
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin",
    "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "K'Sante", "LeBlanc",
    "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
    "Master Yi", "Mel", "Milio", "Miss Fortune", "Wukong", "Mordekaiser", "Morgana", "Naafiri", "Nami",
    "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna",
    "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell",
    "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna",
    "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder",
    "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo",
    "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus",
    "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick",
    "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs",
    "Zilean", "Zoe", "Zyra"
];

const Game = () => {


    const [guess, setGuess] = useState('');
    const [champion, setChampion] = useState(null);
    const [quote, setQuote] = useState('');
    const [reveal, setReveal] = useState(false);
    

    const generateRandomQuote = () => {
      // Set up the quiz question once when the component first loads
      const rand = Math.floor(Math.random() * champions.length);
      const championData = Object.values(ChampionData.data);
      const selectedChampion = championData.find(champ => champ.name === champions[rand]);
      
      if (selectedChampion) {
        let champName = selectedChampion.name;
        let champQuote = selectedChampion.blurb;
        let maskedQuote = champQuote;
  
        while (maskedQuote.includes(champName)) {
          const index = maskedQuote.indexOf(champName);
          maskedQuote = 
            maskedQuote.substring(0, index) + "____" + 
            maskedQuote.substring(index + champName.length);
        }
  
        setChampion(selectedChampion);
        setQuote(maskedQuote);
        setGuess('');
      }
    }

    useEffect(() => {
        generateRandomQuote();
    }, []); // empty dependency array means it runs only once on mount
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (guess.toLowerCase() === champion.name.toLowerCase()) {
        alert('Correct! The champion is ' + champion.name);
        generateRandomQuote(); // Generate a new quote after correct guess
      } else {
        alert('Incorrect! Try again.');
      }
      setGuess('');
    };
  
    if (!champion) return <p className="text-white">Loading...</p>;

    return(
        <div className='flex flex-col items-center justify-center '>
            <h2 className='text-3xl font-bold text-white mb-4'>Quiz Questions</h2>
            <p className='text-white text-xl max-w-lg'>{reveal ? champion.name : "____"} says: "{quote}"</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-8">
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter your guess"
                    className="text-white border border-gray-300 rounded px-4 py-2 text-black"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            <button
                onClick={() => setReveal(!reveal)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            > Reveal Answer</button>
            <button
                onClick={generateRandomQuote}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            > New Blurb </button>
        </div>
    )

}

function getRandomChampion() {
    const champions = Object.values(ChampionData.data);
    const randomIndex = Math.floor(Math.random() * champions.length);
    return champions[randomIndex];
}

export default Game;