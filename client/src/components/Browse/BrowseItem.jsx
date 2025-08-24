import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './BrowseItem.css'
import { Link } from 'react-router-dom';

export default function BrowseItem(data) {
  return (
    <Card className='browseItemCard'>
      <Card.Img variant="top" src={data.book.imageUrl} className="browseItemImage"/>
      <Card.Body>
        <Card.Title>{data.book.bookName}</Card.Title>
        <Card.Text>
          <Link to={`/books/${data.book._id}`}> description </Link>
        </Card.Text>
        <Link to={`/books/${data.book._id}`}> <Button variant="primary" className="browseItemButton">Go To details</Button> </Link>
      </Card.Body>
    </Card>
  );
}