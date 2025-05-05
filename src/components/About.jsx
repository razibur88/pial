import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import Four from "../assets/four.jpg";

const About = () => {
    return (
        <section id='about' className='py-5'>
            <Container>
                <Row>
                    <Col lg={12}>
                    <div className="about_inn">
                    <h2 className='text-center'>About</h2>

                    <FaFacebookF className='amio'/>
                
                    </div>
                       
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Four} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='ami'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Four} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='ami'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Four} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='ami'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About