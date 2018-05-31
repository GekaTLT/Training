import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


import MainPage from './main/collectionsMain';
import Recipes from './main/recipes';
import * as Action from "../action/action";
import  Preloader from './preloader';
import {collection, category} from '../nativeJS/url';

class  Main extends Component {
    constructor (props){
        super(props);
        let urlCollection = collection();
        let urlCategory = category();
        this.props.Action.loadCategory(urlCollection,urlCategory)
    }

    render(){
        let collection = this.props.subLinks.collection;
        if (this.props.subLinks.load){
            return (
                <Switch>
                    <Route exact path='/'>
                        <MainPage />
                    </Route>
                    <Route path='/*'>
                        <Switch>
                            {
                                this.props.subLinks[collection].map(
                                    (ele) => {
                                        return (
                                        <Route path={`/${collection}-${ele}`}>
                                            <Recipes />
                                        </Route>
                                        )
                                    }
                                )
                            }
                            <Route path='/*'>
                                <MainPage />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            );
        }
        else {
            return (<Preloader />)
        }
    }
}

function mapStateToProps (state) {
    return {
        subLinks: state.subLinkReduce
    }
}
function mapDispatchToProps (dispatch) {
    return {
        Action: bindActionCreators(Action, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);