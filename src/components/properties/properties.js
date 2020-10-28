import React from 'react';
import {connect} from 'react-redux';

import './properties.css';

const Property = ({propertyName, definition}) => {
    return(
        <div>
            <span className='columns left_column'>{propertyName}: </span>
            <span className='columns right_column'>{definition}</span>
        </div>
    );
}

const PropertyContainer = ({properties}) => {
    if(properties.length===0) return null;
    
    return(
        <ul className='propertyContainer__ul'>
            {
                properties.map(el => {
                    return(
                        <li key={el.id}>
                            <Property {...el} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = ({productProperties}) => {
    return{
        properties: [...productProperties]
    };
};

export default connect(mapStateToProps)(PropertyContainer);