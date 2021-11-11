import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Album.propTypes = {
    album: PropTypes.object
};

function Album({ album, id }) {
    return (
        <li className="album" id={id}>
            <div className="thumbnail">
                <img src={album.thumbnailUrl} alt="" />
            </div>
            <p className="title">{album.title}</p>
        </li>
    );
}

export default Album;