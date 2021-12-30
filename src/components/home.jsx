import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './nav'

import '../styles/home.css'

/* <div>
                    <nav>
                        <ul className="primary-navigation underline-indicators flex">
                            <li className="active"><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
                            <li><a className=" ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>01</span>Destination</a></li>
                            <li><a className=" ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                            <li><a className=" ff-sans-cond uppercase text-white letter-spacing-2" href="#"><span>03</span>Technology</a></li>
                        </ul>
                    </nav>
                </div*/

const Home = () =>{
    return(
        <div className="home">
            
           <Navbar/>
            <main className="grid-container grid-container--home">
                <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
  <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
  <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience! </p>
                </div>
                <div className='explore-btn'>
                <Link to = "/destination" className="large-button uppercase ff-serif  text-dark bg-white"> Explore </Link>

                </div>
            

            </main>
            
  


        </div>
    )
}


export default Home;