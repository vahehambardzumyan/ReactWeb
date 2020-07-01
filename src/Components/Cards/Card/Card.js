import React,{useState} from 'react';
import './Card.css'
import '../Cards.css'
import Modal from 'react-bootstrap/Modal'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';

const Card = (props) => {
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

    return ( 

  


        <div className='Card'>   
      
          <Modal className="modal" show={show} onHide={handleClose} >
        <Modal.Header >
            <Modal.Title>Your suit is coming</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img alt="G" src="https://24.media.tumblr.com/44761f0f60e0ea6a7920ec7585927d48/tumblr_mjfhz86gr01rp4duqo2_500.gif" />
           
            <p> </p>
            <input type="file" name="file" id="file" className="custom-file-input" />
            <p> </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cancel </Button>
            <Button variant="primary" onClick={handleClose}> Allow  </Button>
        </Modal.Footer>
    </Modal>
                    
                        <div className="carousel__cell__img" > <img alt="G" className="carousel__cell__img" src={props.img} />  </div>
                        <div className="call-button"> <button onClick={handleShow} >Call</button></div>
                    
        </div>
     );
}
 
export default Card;