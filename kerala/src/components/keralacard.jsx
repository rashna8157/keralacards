import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kochi from './img/Kochi.webp'
import munnar from './img/munnar.jpg'
import wayanad from './img/wayanad.jpg'
import  kozhikod from './img/kozhikod.jpg'
import{Container,Row,Col} from 'react-bootstrap'
function Keralacard() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg-3>
    <Card style={{ width: '18rem',height:'34rem' }}>
      <Card.Img variant="top" src={kochi} style={{height:'140px'}} />
      <Card.Body>
        <Card.Title>kochi</Card.Title>
        <Card.Text>
        Geographical features. Kochi lies at the northern end of a narrow neck of land, about 19 km long and less than 1.6 km wide in many places, and is separated from the mainland by inlets from the Arabian sea and by the estuaries of rivers draining from the Western Ghats. As a result, Kochi is a natural harbour. Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg-3>
    <Card style={{ width: '18rem',height:'34rem' }}>
      <Card.Img variant="top" src={munnar}  style={{height:'140px'}} />
      <Card.Body>
        <Card.Title>munnar</Card.Title>
        <Card.Text>
        Munnar is renowned for its scenic tea plantations, lush green hills, and serene lakes. It's a popular destination for its natural beauty and romantic ambiance. When is the best time to visit Munnar? Munnar is good throughout the year.
        </Card.Text>
        <Button variant="primary" style={{marginTop:'100px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg-3>
    <Card style={{ width: '18rem',height:'34rem' }} >
      <Card.Img variant="top" src={wayanad}  style={{height:'140px'}}/>
      <Card.Body>
        <Card.Title>wayanad</Card.Title>
        <Card.Text>
        Wayanad is in the north-east of Kerala state with administrative headquarters at the municipality of Kalpetta. Wayanad District came into existence on 1st November, 1980 as the 12th District of Kerala consisting of Mananthavady, Sulthanbathery and Vythiri Taluks.
        </Card.Text>
        <Button variant="primary"style={{marginTop:'100px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg-3>
    <Card style={{ width: '18rem' ,height:'34rem'}}>
      <Card.Img variant="top" src={kozhikod}  style={{height:'140px'}} />
      <Card.Body>
        <Card.Title>calicut</Card.Title>
        <Card.Text>
        Kozhikode also known as Calicut, is a city in the state of Kerala in southern India on the Malabar coast. Kozhikode is the largest urban area in the state and 195th largest urban area in the world.
        </Card.Text>
        <Button variant="primary"style={{marginTop:'140px'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default  Keralacard;