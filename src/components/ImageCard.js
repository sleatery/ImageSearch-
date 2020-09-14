import React from 'react';

class ImageCard extends React.Component {
    
render() {
    const { description, urls } = this.props.imagesne;

return (
<div>
    <img src={urls.regular} 
              alt={description}  />

</div>
            );

}

}


export default ImageCard;