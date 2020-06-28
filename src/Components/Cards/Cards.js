import React from 'react';
import Card from './Card/Card';
import './Cards.css'
import ReactDOM from 'react-dom';



const Cards = (props) => {


    var cellCount = 9;
    var selectedIndex = 0;

    const rotateCarousel = () => {
        var carousel = document.querySelector('.carousel');
        var angle = selectedIndex / cellCount * -360;
        carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';

    }

    const prevButton = () => {
        selectedIndex--;
        rotateCarousel();
    }

    const nextButton = () => {
        selectedIndex++;
        rotateCarousel();
    }




    return (
        <div className='Cards'>

            <button
                style={{ width: '400px', height: '60px' }}>
                <p > Choose and call your  iron suit </p>
            </button>
            <div class="scene">
                <div class="carousel">

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/cURGOvH.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/4CpDPZz.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/MwOgE8m.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/xPTLUm7.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/zplopZU.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/eNKZdEs.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/As6cQ2v.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/QQGfYq9.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/1dOifR3.jpg" />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>

                </div>

            </div>
            <div className="prevornext">
                <button onClick={prevButton} class="previous-button">Previous</button>
                <button onClick={nextButton} class="next-button">Next</button>

            </div>


        </div>
    );
}

export default Cards;




