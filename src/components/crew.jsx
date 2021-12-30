import React, {useState} from 'react'

import Navbar from './nav';
import data from '../data.json'
import '../styles/crew.css'

const Crew = () =>{
    const { crew } = data;
    const [currentCrewMember, setCurrentCrewMember] = useState(0);
    return(
        <div className="crew">
            <Navbar/>
            <main id="main" className="grid-container grid-container--crew flow" >
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
               
        
            <article className="crew-details flow">
                <header class="flow-space--small">
                    <h2 className="fs-600 uppercase ff-serif">{crew[currentCrewMember].role}</h2>
                    <p className="fs-700 uppercase ff-serif">{crew[currentCrewMember].name}</p>
                </header>
              
              <p className="text-accent fs-400 bio ">{crew[currentCrewMember].bio}</p>

              </article>
        
        
        <div className=" dot-indicator flex">
                  {crew.map((ele, index) => (
                      
                    <button
                    key={ele.name}
                      onClick={() => {
                        setCurrentCrewMember(index);
                        
                      }}
                    >  <span class="sr-only">{crew[currentCrewMember].role}</span>
                     
                    </button>
                  ))}
                </div>
              
              <img
                src={

                       crew[currentCrewMember].images.png } 
                       alt={crew[currentCrewMember].name}
              />
              
              
            

            </main>
        </div>

    )
}

export default Crew;