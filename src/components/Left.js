import React from 'react';
import '../styles/photo.css'
import styled from 'styled-components'
import PhotoCarousel from './PhotoCarousel'

const Column = styled.div`
    background-color: #000000;
`

const Description = styled.div`
    background-color: #ffffff;
    width: 90%;
    margin: auto;
    border-radius: 5px;
`
class Left extends React.Component {
    
    render() {
        return (
            <Column>
            <div className="section-title white">
                history of music theory
            </div>
            <Description>
                <div className="description">
                    lksfdksfjkk
                </div>
            </Description>
            <PhotoCarousel url="20201005-bso-0011.JPG"/>
            <PhotoCarousel url="20201005-bso-0009.JPG"/>

            <div className="section-title white">
                slkdfjksfj
            </div>
            </Column>
            
        )
    }
}

export default Left;