import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardC.css'

const CardC = () => {
  return (
    <>
   <Card >
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-sunflower-full-screen-backdrop-widescreen-photos-image_2684387.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <div className='text-center'>
       <Button variant="primary">Ver mas</Button>
       </div>
      </Card.Body>
    </Card> 
    
    
    
    </>
  )
}

export default CardC
