import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import bg1 from './img/bg1.webp';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';


function Slider() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <Pictureframe imgUrl ={bg1}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <Pictureframe imgUrl ={bg2}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Pictureframe imgUrl ={bg3}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;