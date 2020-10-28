import React from 'react';
import {withRouter} from 'react-router-dom';

import './color-box.css';

const ColorBox = ({urlColor='', title=null, product_id, history}) => {
    
    return(
        <img
            onClick = {()=>history.push(`item${product_id}`)}
            src={urlColor} title={title} className='color-box' alt='color' />
    );
}

export default withRouter(ColorBox);