import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import * as Action from '../../../action/action';



class Performance extends Component{
    constructor(props){
        super(props);
        let collectionName = this.props.collectionName;
        this.props.Action.loadCollectionsMain();
    }

    test(){
        let obj = this.props.collectionsMainReduce;
        for (let elem in obj){

        }
    }

    render(){
        let obj = this.props.collectionsMainReduce;
        return (
            <div className='colectionsMain__colection__category'>
                {this.test()}
                <div className='colectionsMain__colection__category__recipes'>
                    <h3 className='colectionsMain__colection__category__recipes__title'></h3>

                </div>
            </div>
        )


    }
}

function mapStateToProps (state) {
    return {
        collectionsMainReduce: state.collectionsMainReduce
    }
}
function mapDispatchToProps (dispatch) {
    return {
        Action: bindActionCreators(Action, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Performance);