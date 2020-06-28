import React from 'react';
import './Card.css'
import '../Cards.css'

const Card = (props) => {


    return ( 
        <div className='Card'>
                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src={props.src} />  </div>
                        <div class="call-button"> <button  >Call</button></div>
                    </div>
        </div>
     );
}
 
export default Card;