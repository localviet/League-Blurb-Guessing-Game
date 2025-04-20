import React from 'react';
import { useState, useEffect } from 'react';
import ChampionData from '../data/champion.json';

const ChampionList = () => {
    const champions = Object.values(ChampionData.data);
    
    let printer = "";

    return (
        <div className='flex flex-col items-center justify-center space-y-5'>
            {champions.map((champion) => {
                printer += (champion.name + "\n");
                console.log(printer)
                return(
                
                <div key={champion.id} className=' text-center flex flex-col justify-center items-center border-2 border-white'>
                    <h2 className='text-2xl font-semibold text-white'>{ champion.name}</h2>
                    <img src={`/tiles/${champion.name}_0.jpg`} alt={champion.name} className='w-32 h-32'/>
                    <p className='text-white max-w-xl'>{champion.blurb}</p>
                </div>
            )})}
        </div>
    )
}

export default ChampionList;