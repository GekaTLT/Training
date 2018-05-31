import {collection, category} from '../nativeJS/url';

export default function (state = {load: false}, action){
    let newState;
    let objTemp = {};
    if (!state.collection){
        state = Object.assign({},state,{
            collection: collection()
        });
    }

    if (action.type === 'LOAD_HEADER'){
        objTemp[action.dataCollection] = action.data;
        newState = Object.assign({},state,objTemp,{
                load: true
            });
        if (!newState.category){
            newState = Object.assign({},newState,{
                category: category()
            });
            return newState
        }
        else {
            return newState
        }
    }

    if (action.type === 'ACTIVE_LINK'){
        newState = Object.assign({},state,{
            collection: action.collection,
            category: action.category
        });
        return newState
    }


    return state
}