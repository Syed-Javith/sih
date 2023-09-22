import Carousel from 'react-bootstrap/Carousel';
import spaceImage from '../../images/innovation_ai';
import image2 from '../../images/innovate.blub.png'
import image3 from '../../images/innovation.desk.jpg'
function HomeCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img height={400} width="100%" src={spaceImage} alt="First slide" />
        <Carousel.Caption>
          <h3>Why peernet?</h3>
          <p>

Fostering Innovation: We are committed to promoting innovation by offering a platform where students can share their unique project ideas and gain inspiration from others.

Facilitating Peer Learning: This is a hub for peer learning. By sharing your projects and exploring those of your peers, you can learn from diverse perspectives and experiences.

Ensuring Academic Integrity: We take plagiarism seriously. Our platform is equipped with plagiarism detection tools to maintain the integrity of every project shared..</p>
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
