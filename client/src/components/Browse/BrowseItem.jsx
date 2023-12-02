import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './BrowseItem.css'

export default function BrowseItem() {
  return (
    <Card className='browseItemCard'>
      <Card.Img variant="top" src="./Silver grains_Pori.jpg" className="browseItemImage"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary" className="browseItemButton">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}