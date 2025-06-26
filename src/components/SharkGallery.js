
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const sharks = [
  { name: 'ホホジロザメ', description: '海の頂点捕食者', image: '/sharks/great-white.jpg' },
  { name: 'ジンベエザメ', description: '最大の魚類', image: '/sharks/whale-shark.jpg' },
  { name: 'シュモクザメ', description: '特徴的な頭を持つ', image: '/sharks/hammerhead.jpg' },
];

const SharkGallery = () => {
  return (
    <Container id="gallery" className="my-5">
      <h2 className="text-center mb-4">サメの紹介</h2>
      <Row>
        {sharks.map((shark, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={shark.image} />
              <Card.Body>
                <Card.Title>{shark.name}</Card.Title>
                <Card.Text>{shark.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SharkGallery;
