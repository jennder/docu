import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PhotoCarousel from '../components/PhotoCarousel'

class Landing extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="intro">
                    <Col>
                    <PhotoCarousel />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;