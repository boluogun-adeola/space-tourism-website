import React, {useState} from 'react'
import Navbar from './nav'
import data from '../data.json'

import '../styles/technology.css'

const Technology = () =>{
    const {technology} = data;
    const [currentTechnology, setCurrentTechnology] = useState(0);
    return(
        <div class="technology">
            <Navbar/>
            <main id="main" class="grid-container grid-container--technology">
            <h1 className="numbered-title"><span aria-hidden="true">03</span> SPACE LAUNCH 101</h1>
                
                    <div className='number-indicators flex'>
                    {technology.map((ele,index)=>(
                         <button
                        
                         aria-selected="true" 
                         
                           key={ele.name}
                           onClick={() => {
                             setCurrentTechnology(index);
                             
                           }}
                         >  {index + 1}
                          
                         </button>
                    ))}
                    </div>
                  
                    <article className='technology-details flow'>
                      
                        <header>
                        <h2 className="uppercase ff-sans-cond fs-400 
                          letter-spacing-2 "> The terminology ..</h2>
                        <h3 className='ff-serif fs-700 uppercase'> {technology[currentTechnology].name}</h3>
                        </header>
                        
                        
                     
                        <p className="ff-sans-normal fs-400 text-accent ">{technology[currentTechnology].description}</p>

                    </article>
            
                <img className='portrait' src={technology[currentTechnology].images.portrait}/>
                <img className='landscape' src={technology[currentTechnology].images.landscape}/>
                
            </main>
        </div>

    )
}

export default Technology