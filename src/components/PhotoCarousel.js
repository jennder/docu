import React from 'react';
import {Container} from 'react-bootstrap'
import styled from 'styled-components'
import '../styles/photo.css'

const ImageHolder = styled.div`
    max-width:80%;
    margin: auto;
    padding: 100px 0;
`
class PhotoCarousel extends React.Component {
    
    render() {
        return (
            <Container className="img-carousel">
                <ImageHolder>
                <img src={this.props.url} />
                </ImageHolder>
            </Container>
            
        )
    }
}

export default PhotoCarousel;