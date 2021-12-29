
import React, {useState} from 'react'
import Navbar from './nav'
import data from '../data.json'

import '../styles/destination.css'
/*Require data and images */




const Destination = () =>{

  const { destinations } = data;
  const [currentDestination, setCurrentDestination] = useState(0);

    
    
    
  

    return(
        <div className="destination">
            <Navbar/>
            <main id="main" className="grid-container grid-container--destination flow">
        
            <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
            <img
                src={destinations[currentDestination].images.png }
                alt={destinations[currentDestination].name} 
                       
              />
           <ul className="tab-list underline-indicators flex">
                  {destinations.map((ele, index) => (
                      
                    <li
                     className="uppercase ff-sans-cond text-accent  letter-spacing-2"
                      key={ele.name}
                      onClick={() => {
                        setCurrentDestination(index);
                      }}
                    >  {ele.name}
                     
                    </li>
                  ))}
                </ul>
              <div className="destination-details flow">
              <h2 className="fs-800 uppercase ff-serif">{destinations[currentDestination].name}</h2>
              
              <p >{destinations[currentDestination].description}</p>
              <div className="destination-meta flex">
                <div>
                  <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                  <p className="  ff-serif uppercase">
                    {destinations[currentDestination].distance}
                  </p>
                </div>
                <div >
                  <h3 className="text-accent fs-200 uppercase">Est. Travel time</h3>
                  <p className=" ff-serif uppercase">
                    {destinations[currentDestination].travel}
                  </p>
                </div>
              </div>
          
              
              
              
             
              </div>
           
          

    
    
              </main>
          </div>
    )
}

export default Destination;

