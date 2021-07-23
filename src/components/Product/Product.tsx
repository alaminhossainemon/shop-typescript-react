import React from 'react';
import { IProduct } from '../Home/Home';
import { Button, Card } from 'react-bootstrap';

const Product = ({ id, title, image, description, price }: IProduct) => {
  return (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">{price} Buy Now</Button>
        </Card.Body>
      </Card>
    </div>

  );
};

export default Product;