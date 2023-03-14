import './About.css';
import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <img className="about__image" src="../pizza.jpg" alt="" />
        <div className="about__text">
          <p>
            Usually people come to Pizza’s Cafe just to eat. Our promoters distribute leaflets about
            a slice of pizza for twenty rubles or something else profitable. We are doing this as
            the first step to get to know each other.
          </p>
          <p>
            But for us, Pizza’s Cafe is not just pizza. It’s pizza too, but first of all it’s a big
            deal that inspires us, makes us wake up every morning and continue working with
            interest.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
