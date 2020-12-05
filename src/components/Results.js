import React from 'react';
import ImageCard from './ImageCard';
import './ImageCard.css'
import './ImageList.css'

function Results() {
    return (
        <div className='ImageList'>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
        </div>
    )
}

export default Results