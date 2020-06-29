import React, { useState } from 'react';
import Card from './Card/Card';
import './Cards.css'
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import Iframe from 'react-iframe'

const Cards = (props) => {
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //Carousel algorithm
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
            {/* <Button variant="primary" >
                Launch demo modal
      </Button> */}

            <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Your suit is coming</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://24.media.tumblr.com/44761f0f60e0ea6a7920ec7585927d48/tumblr_mjfhz86gr01rp4duqo2_500.gif" />
                    {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                        width="450px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" /> */}
                    <p> </p>
                    <input type="file" name="file" id="file" class="custom-file-input" />
                    <p> </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button variant="primary" onClick={handleClose}> Allow  </Button>
                </Modal.Footer>
            </Modal>
            <div class="scene">
                <div class="carousel">

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/cURGOvH.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/4CpDPZz.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/MwOgE8m.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/xPTLUm7.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/zplopZU.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/eNKZdEs.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/As6cQ2v.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/QQGfYq9.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
                    </div>

                    <div class="carousel__cell">
                        <div class="carousel__cell__img" > <img class="carousel__cell__img" src="https://i.imgur.com/1dOifR3.jpg" />  </div>
                        <div class="call-button"> <button onClick={handleShow} >Call</button></div>
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




