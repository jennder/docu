import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PhotoCarousel from '../components/PhotoCarousel'
import '../styles/main.css';

class Landing extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="intro">
                    <Col>
                    <div className='section-title'>untitled</div>
                    <PhotoCarousel />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;