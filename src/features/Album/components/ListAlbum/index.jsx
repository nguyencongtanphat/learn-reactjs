import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/index'
import './style.scss'
ListAlbum.propTypes = {
    listAlbum: PropTypes.array
};

ListAlbum.defaultProps = {
    listAlbum: []
}
function ListAlbum({ albumList }) {
    return (
        <div>
            <h1 className='list-title'>Gan day</h1>
            <ul className="list-album">
                {albumList.map((album, index) => (
                    <Album album={album} id={index} />
                ))}
            </ul>
        </div>
    );
}

export default ListAlbum;