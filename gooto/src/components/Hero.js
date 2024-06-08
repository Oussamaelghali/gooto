import React from 'react';
import './Hero.css';
import destination1 from '../images/destination1.jpg';
import pics from '../images/pics.png'
import destination4 from '../images/destination4.png';
import destination5 from '../images/destination5.png';


const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${destination1})` }}>
      <section className="hero">
      <div className="destination1">
        <h3>Beautiful Beaches</h3>
        <img className='img1' src={destination5} alt="Destination 1" />
        
        <p className='desc'>Discover the most beautiful beaches around the country.</p>
      </div>
      <div className="hero-content">
      <div className="header">
        <div className="header-content">
          <h1>Explore <span className="star-icon">✨</span> <br/> 
            <span className="world-text">
              <div className="image-gallery">
                <div >
                  <img src={pics} alt="Img1" />
                </div>
              </div>
             Morroco
            </span>
          </h1>
        </div>
      </div>
        <p>Discover the best places to visit in Morocco</p>
        <button type="button" class="bttn btn btn-outline-secondary">Learn More</button>

        

      </div>

      <div className="destination2">        
        <h3>Historic Cities</h3>
        <img className='img2' src={destination4} alt="Destination 2" />
        <p className='desc'>Explore the rich history and culture of ancient cities.</p>
      </div>
      </section>
    </section>
  );
};

export default Hero;
