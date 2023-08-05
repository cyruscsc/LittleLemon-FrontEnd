import React from "react";
import './Specials.css'

const Specials = props => {
  return (
    <section id="specials">
      <div className="super-container">
        <h2 className="subtitle">Weekly Specials</h2>
        <div className="grid-container special-items">
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/greek-salad.jpg" alt="Greek Salad" />
            </div>
            <div className="flex-container card-title">
              <h3>Greek Salad</h3>
              <span className="item-price">$12.00</span>
            </div>
            <div className="card-paragraph">
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
          </article>
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/bruschetta.jpg" alt="Bruschetta" />
            </div>
            <div className="flex-container card-title">
              <h3>Bruschetta</h3>
              <span className="item-price">$12.00</span>
            </div>
            <div className="card-paragraph">
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            </div>
          </article>
          <article className="card special-item">
            <div className="card-image">
              <img src="./images/lemon-dessert.jpg" alt="Lemon Dessert" />
            </div>
            <div className="flex-container card-title">
              <h3>Lemon Dessert</h3>
              <span className="item-price">$12.00</span>
            </div>
            <div className="card-paragraph">
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Specials;
