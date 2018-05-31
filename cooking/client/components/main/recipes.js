import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Recipe from './recipes/recipe';
import * as Action from "../../action/action";
import  Preloader from '../preloader';

class Recipes extends Component {
    constructor(props){
        super(props);

    }


    render(){
        let obj = this.props.recipesStore.recipes;
        let array = [];
        if (this.props.recipesStore.load){
            for (let ele of obj){
                array.push(<Recipe recipe={ele} />)
            }
            return <div className="recipes">
                {array}
            </div>
        }
        else {
                return (<div></div>)
            }
    }
}


function mapStateToProps (state) {
    return {
        subLinks: state.subLinkReduce,
        recipesStore: state.recipesReduce
    }
}
function mapDispatchToProps (dispatch) {
    return {
        Action: bindActionCreators(Action, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipes);