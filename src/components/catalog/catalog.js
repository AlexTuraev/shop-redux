import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {withDoorServices} from '../hoc';
import {itemSelectedNew} from '../../actions';

import './catalog.css';

class Catalog extends React.Component {

    componentDidMount(){
        const {itemSelected} = this.props;
        itemSelected(null);
    }

    componentDidUpdate(prevProps){
        const match1 = /\d+$/.exec(this.props.location.pathname);
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.props.itemSelected(parseInt(match1,10));
        }
    }
    
    render(){
        const {categories, history} = this.props;
        if(categories.length === 0){
            return null;
        }

        //onClick={()=>itemSelected(item.id)}>
        //<Link to={`/catalog${item.myPath}`}>{item.title}</Link>
        return (
            <section className='catalog'>
                <div>Catalog's content</div>
                <ul className='ul-catalog'>
                    {
                        categories.map((item)=>{
                            return(
                                <li key={item.id}
                                    className='catalog__li'
                                    onClick={()=>{
                                        //itemSelected(item.id);
                                        history.push(`/catalog${item.myPath}`);
                                    }}
                                    >
                                        {item.title}
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

const mapStateToProps = ({categories}) => {
    return {
        categories
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {doorServices} = ownProps;

    return{
        //itemSelected: (id) => itemSelected(doorServices, dispatch)(id)
        //itemSelected: itemSelected(doorServices, dispatch)
        itemSelected: itemSelectedNew(doorServices, dispatch)
    }
};

export default withDoorServices(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(Catalog))
    );