import React from 'react';
import Card from './Card/Card';
import './Cards.css'
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


class Cards extends React.Component {
    render() {
        return (

            
            //     <Carousel className="ankap1">
            //         <div>
            //             <img height="400px" width="10px" src="https://images-na.ssl-images-amazon.com/images/I/61kzc1HHlJL._AC_SY879_.jpg" />
            //             <p className="legend">Legend 1</p>
            //         </div>
            //         <div>
            //             <img height="200px" width="200px" src="https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg" />
            //             <p className="legend">Legend 2</p>
            //         </div>
            //         <div>
            //             <img height="200px" width="200px" src="https://i.pinimg.com/originals/7a/60/bc/7a60bc0ce22863afefeff3fdc463fce7.jpg" />
            //             <p className="legend">Legend 3</p>
            //         </div>
            //     </Carousel>
            <div className="ankap" >
            <CarouselProvider
                naturalSlideWidth={500}
                naturalSlideHeight={1000}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>Mark I
              <img height="150" width="100" src="https://images-na.ssl-images-amazon.com/images/I/61kzc1HHlJL._AC_SY879_.jpg" />
                    </Slide>
                    <Slide index={1}>Mark II
              <img height="150" width="100" src="https://images-na.ssl-images-amazon.com/images/I/61kzc1HHlJL._AC_SY879_.jpg" /></Slide>
                    <Slide index={2}>Mark III
              <img height="150" width="100" src="https://images-na.ssl-images-amazon.com/images/I/61kzc1HHlJL._AC_SY879_.jpg" /></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            </div>
        );
    }
};

export default Cards;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));