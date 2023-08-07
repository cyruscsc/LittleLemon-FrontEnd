import React from "react";
import './Specials.css'

const Specials = props => {
  return (
    <section id="specials" className="bg-white">
      <div className="super-container">
        <h2 className="subtitle section-title weekly-specials">Weekly Specials</h2>
        <div className="grid-container special-items">
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/greek-salad.jpg" alt="Greek Salad" className="food-image" />
            </div>
            <a href="#" className="flex-container card-title">
              <h3>Greek Salad</h3>
              <span className="text-orange">$12.00</span>
            </a>
            <div className="card-paragraph">
              <p>The famous greek salad of crispy lettuce, peppers, olives and our <span className="highlight-text">Chicago style feta cheese</span>, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
          </article>
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/bruschetta.jpg" alt="Bruschetta" className="food-image" />
            </div>
            <a href="#" className="flex-container card-title">
              <h3>Bruschetta</h3>
              <span className="text-orange">$12.00</span>
            </a>
            <div className="card-paragraph">
              <p>Our Bruschetta is made from grilled bread that has been smeared with <span className="highlight-text">garlic</span> and seasoned with <span className="highlight-text">salt and olive oil</span>.</p>
            </div>
          </article>
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/lemon-dessert.jpg" alt="Lemon Dessert" className="food-image" />
            </div>
            <a href="#" className="flex-container card-title">
              <h3>Lemon Dessert</h3>
              <span className="text-orange">$12.00</span>
            </a>
            <div className="card-paragraph">
              <p>This comes straight from <span className="highlight-text">grandma's recipe book</span>, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Specials;
