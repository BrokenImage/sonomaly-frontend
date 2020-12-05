import React from 'react';
// import logo from '/images/raptor_maps_logo.png'
import './ImageCard.css'
 
function ImageCard() {
    // const { name, image, results} = props // populate uploaded image results and predictions with this
    return (
        <div>
            <img src= 'https://images.unsplash.com/photo-1503495731986-41d521ecbb32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' width='250' height='250' alt='Uploaded Image' /> 
            <h1> Image Name </h1>
            <div>Prediction: </div>
        </div>               
        
    );
}

 
export default ImageCard;