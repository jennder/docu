import React from 'react';
import {Container} from 'react-bootstrap'
import styled from 'styled-components'
import '../styles/photo.css'

const ImageHolder = styled.div`
    max-width:500px;
    margin: auto;
    padding: 100px 0;
`
class PhotoCarousel extends React.Component {
    
    render() {
        return (
            <Container className="img-carousel">
                <ImageHolder>
                <img src="https://i.imgur.com/HT2y3EN.jpeg" />
                </ImageHolder>
            </Container>
            
        )
    }
}

export default PhotoCarousel;