import {collection, category} from '../nativeJS/url';

export default function (state = {load: false}, action){
    let newState;

    if (action.type === 'LOAD_CATEGORY'){
        newState = Object.assign({},state,{recipes: action.data},{load: true});
        return newState
    }

    return state
}