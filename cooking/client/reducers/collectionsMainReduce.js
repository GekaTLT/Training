export default function (state = {test: 'test'}, action){

    let newState;
    if (action.type === 'LOAD_COLLECTIONS_MAIN'){
        newState = Object.assign({},state,{
            view: action.view,
            name: action.name,
            img: action.img,
            description: action.description,
            ingredients: action.ingredients,
            cooking: action.cooking
        });
        return newState
    }
    return state
}