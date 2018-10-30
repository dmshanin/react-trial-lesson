// Core
import React from 'react';

// Instruments
import { photos } from '../theme/assets/images/photos';

// Components
import Photo from './Photo';

export default class Photos extends React.Component {
    render () {
        const photosJSX = photos.map((photo) => {
            // console.log(' photo', photo);

            return <Photo
                    key = { photo.id }
                    src = { photo.src }
                    secured = { photo.secured }
            />;
        });

        return (
            <div className = 'photos'>{ photosJSX }</div>
        );
    }
}