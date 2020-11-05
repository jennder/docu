import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Left from '../components/Left'
import Right from '../components/Right'
import '../styles/main.css';

class Landing extends React.Component {
    render() {
        return (
            <Container fluid style={{padding: 0}}>
                <Row>
                <Col style={{padding: 0}}><Left /></Col>
                <Col style={{padding: 0}}><Right /></Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;

