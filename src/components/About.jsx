import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
    return (
        <div className='about' id = 'about'>
            <Container>
                <Row>
                    <Col size={12} md={12}>
                        <h2>Who Am I?</h2>
                    </Col>
                </Row>
                <br />
                
                <Row>
                    <Col size={12} md={6}>
                        <h3><strong>Education</strong></h3>
                        <p>
                            <h4>Delhi Technological University <br/>(formerly DCE)</h4>
                            <h5>Delhi, India</h5>
                            <div align='left'> </div>
                        </p>
                    </Col>
                    <Col size={12} md={6}>
                        <h3>Skills</h3>
                        <h3>Hobbies</h3>
                        <h3>Interests</h3>
                    </Col>
                        
                </Row>
                <br />
                <button type='submit'><span>Hire Me!</span></button>
            </Container>
        </div>
    )
};