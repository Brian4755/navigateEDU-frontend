import { Link } from 'react-router-dom'
import './LandingPage.css';

import HomeGif from '../../images/HomeGif.gif'

const Landing = ({data}) => {
    return (
        <div className="content-container">
            <section className='landing-about'>
                <svg className="landingBG" width="782" height="875" viewBox="0 0 782 875" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M778.042 388.431C746.07 668.275 575.795 900.367 327.501 872C79.2074 843.633 -153.081 565.549 -121.109 285.704C-89.1371 5.85901 138.063 -198.004 386.357 -169.637C634.65 -141.269 810.014 108.586 778.042 388.431Z" fill="#F2CF66" />
                </svg>
                <h1>Explore the Digital World</h1>
                <p>NavigatEDU is your guide to discovering the digital world! Join us on this exciting journey to learn to become a citizen of the digital age.”</p>
                <Link to="/learn" className='learn'>Start Learning</Link>
            </section>
            <img src={HomeGif} alt="loading..." />
        </div>
    );
}

export default Landing;