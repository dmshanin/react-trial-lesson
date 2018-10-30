// Core
import React from 'react';

// Instruments
import { photos } from '../theme/assets/images/photos';

export default class Photos extends React.Component {
    render () {
        const photosJSX = photos.map((photo) => {
            return photo.src;
        });

        return (
            <div className = 'photos'>{ photosJSX }</div>
        );
    }
}