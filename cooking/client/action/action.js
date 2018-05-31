import axios from 'axios';

function activeLink(collection, category) {
    return {
        type : 'ACTIVE_LINK',
        collection,
        category
    }
}

function loadHeader(collection) {
    return (dispatch) => {
        axios.post('/loadHeader', {
            collection: collection
        })
            .then(function (response) {
                dispatch({
                    type: 'LOAD_HEADER',
                    dataCollection: collection,
                    data: response.data
                })
            })
            .catch(function (error) {
                console.error(error);
            });
    }

}

function loadCollectionsMain() {
    return {
        type: 'LOAD_COLLECTIONS_MAIN',
        view:'завтраки',
        name:'Вафли',
        img:[],
        description:'',
        ingredients:[
            'мука, 2 1/2 ст.',
            'разрыхлитель, 2 ч.л.',
            'сода, 1 ч.л.',
            'соль, 1/2 ч.л.',
            'соевое молоко, 2 1/4 ст.',
            'растительное масло, 3 ст.л.',
            'сахар, 3 ст.л.',
            'корица молотая, 1 ч.л.',
            'тёртый мускатный орех, 1/4 ч.л.',
            'экстракт ванили, 1 ч.л.'
        ],
        cooking:[
            'Возьмите большую миску и перемешайте муку, разрыхлитель, соду, соль, сахар, корицу и мускатный орех.',
            'В отдельной ёмкости перемешайте соевое молоко, растительное масло и экстракт ванили. ',
            'Влейте жидкие ингредиенты в миску с сухими ингредиентами и хорошенько перемешайте.',
            'Следуя инструкциям, которые прилагаются к вашей вафельнице, приготовьте вафли.'
        ]
    }
}

function loadCategory(collection, category) {
    return (dispatch) => {
        axios.post('/loadCategory', {
            collection: collection,
            category: category
        })
            .then(function (response) {
                let obj = Object.assign({type: 'LOAD_CATEGORY'},{data: response.data});
                dispatch(obj)
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

export {activeLink,loadHeader,loadCollectionsMain,loadCategory}