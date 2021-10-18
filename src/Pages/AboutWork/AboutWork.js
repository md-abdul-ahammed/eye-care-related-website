import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../Images/feature-img1.jpg'
import img2 from '../../Images/feature-img2.jpg'

const AboutWork = () => {
    return (
        <Row xs={1} md={2} className="g-4 container mx-auto mb-5">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>OUR SUCCESFULL PATIENT REAL RESULTS</Card.Title>
                        <Card.Text>
                            The largest collection of hair lossreal results, with
                            before/ after gallery from patients.
                        </Card.Text>
                        <button className='btn default-btn-regular text-white res-fs-3'>View Before / After Gallery</button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>HOW WE DO HELP SO MANY?</Card.Title>
                        <Card.Text>
                            Finding better solutions for our patients and only recruiting the
                            highest level of educated hair specialists.
                        </Card.Text>
                        <button className='btn default-btn-regular text-white res-fs-3'>Our Work</button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default AboutWork;