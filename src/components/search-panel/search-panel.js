import React from 'react';
import {connect} from 'react-redux';

import {withDoorServices} from '../hoc';
import {actionSearchPanel} from '../../actions';
import './search-panel.css';

const SearchPanel = ({actionSearchPanel}) => {
    return(
        <div className='search-panel__div'>
            <i className="search-panel__search-ico fa fa-search" aria-hidden="true"></i>
            <input 
                onChange={(e)=>actionSearchPanel(e.target.value)}
                className='search-panel__input' placeholder='Поиск товара...' />
        </div>
    );
}

const mapStateToProps = () => {
    return {};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {doorServices} = ownProps;

    return{
        actionSearchPanel: actionSearchPanel(doorServices, dispatch)
    }

}

export default withDoorServices(
    connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
);