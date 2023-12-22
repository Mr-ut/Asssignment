import React from 'react'
import "./home.scss"
import Time from './time.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const handleClick = () => {

    }
  return (
    <div className='container'>
        <div className="card">
            <div className="video">
            {/* <iframe width="300" height="315" src="https://www.youtube.com/embed/hdd6SsssfOM?si=czPmhsDGJoyGpDln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            </div>
            <div className="instructions">
                <h3>Is your Church embracing <br/> impact <span>or AI* hesitant</span> </h3>
                <ul>
                    <li>1. Take this 3-min assignment</li>
                    <li>2. Invite your team to take it too</li>
                    <li>3. View everyone report in one dashboard</li>
                    <li>4. Align on the best next step of your church's  approach to AI </li>
                </ul>
                <div className='btn'>
                <Link to="/quiz">
              <button>Get Started</button>
            </Link>
                    <img src={Time} alt="" />
                    <span>3mins</span>
                </div>
                <span style={{marginLeft:'12px', fontWeight:'normal'}}>* Artificial Intellegence</span>
            </div>
        </div>
    </div>
  )
}

export default Home