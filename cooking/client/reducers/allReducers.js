import { combineReducers } from 'redux';

import subLinkReduce from './headerReduce';
import collectionsMainReduce from './collectionsMainReduce';
import recipesReduce from './recipesReduce'


export default combineReducers({
    subLinkReduce,
    collectionsMainReduce,
    recipesReduce
})