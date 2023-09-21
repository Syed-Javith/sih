import Carousel from 'react-bootstrap/Carousel';
import spaceImage from '../../images/innovation_ai';
import image2 from '../../images/innovate.blub.png'
import image3 from '../../images/innovation.desk.jpg'
function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img height={400} width="100%" src={spaceImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height={400} width="100%" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={400} width="100%" src={image3} alt="Third slide" />
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

export default HomeCarousel;
