import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const Imagelist = (props) => {
   const image = props.imagesne1.map((imagesne) => {
       return <ImageCard key={imagesne.id} image={imagesne}/>
      });

return <div className="image-list"> {image}</div>
};


export default Imagelist;