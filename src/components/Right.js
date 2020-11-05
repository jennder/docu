import React from 'react';
import '../styles/photo.css'
import styled from 'styled-components'
import PhotoCarousel from './PhotoCarousel'


const Column = styled.div`
    background-color: #D0FF33;
`
class Right extends React.Component {
    
    render() {
        return (
            <Column>
                    
                    <div className='section-title'>untitled</div>
                    <PhotoCarousel url="https://i.imgur.com/HT2y3EN.jpeg"/>
                    
                   
            </Column>
            
        )
    }
}

export default Right;