import React from 'react';
import PropTypes from 'prop-types';
import ListAlbum from './components/ListAlbum/index'


function Album(props) {
    const albumList = [
        {
            title: 'Top 100 Au My hay nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg'
        },
        {
            title: 'Top 100 Han hay nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/d/1/9/1d19047de6252c181c11970ca8a91a86.jpg'
        },
        {
            title: 'Top 100 Viet hay nhat',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg'
        }
    ]

    return (
        <div>
            <ListAlbum albumList={albumList} />
        </div>
    );
}

export default Album;