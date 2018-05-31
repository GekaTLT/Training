import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group'
import {Link} from 'react-router-dom';

import * as Action from '../../action/action';
import  Preloader from '../preloader';


class SubLinks extends Component {
    constructor(props){
        super(props);
        this.props.Action.loadHeader(this.props.collectionName);
    }


    liClick(collectionName,i){
        this.props.Action.activeLink(collectionName,i);
        this.props.Action.loadCategory(collectionName,i);
    }

    render() {
        let collectionName = this.props.collectionName;
        if (this.props.subLinks.load){
            return(
                <div className='header__nav__sub-link--wrapper'>
            <CSSTransitionGroup
                component="div"
                transitionName="header__nav__sub-link"
                transitionEnterTimeout={500}
                transitionLeave={false}
                className='header__nav__sub-link'>
                    {
                        this.props.subLinks[collectionName].map(
                        (i) => {
                            return (
                                <Link to={`/${collectionName}-${encodeURIComponent(i)}`} key={i} onClick={this.liClick.bind(this,collectionName,i)}>{i}</Link>
                            )
                        }
                    )
                    }
            </CSSTransitionGroup>
            </div>
            )
        }
        else {
            return (<div></div>)
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

export default connect(mapStateToProps,mapDispatchToProps)(SubLinks);