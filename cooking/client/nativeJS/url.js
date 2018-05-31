
function collection () {                        /*- Колекция*/
    let nameURL = window.location.pathname.split('/');
    let arry = nameURL[1].split('-');
    if (arry[0]){
        return decodeURIComponent(arry[0]);
    }
    else {
        return null
    }
}

function category () {                        /*- Категория*/
    let nameURL = window.location.pathname.split('/');
    let arry = nameURL[1].split('-');
    if (arry[1]){
        return decodeURIComponent(arry[1]);
    }
    else {
        return null
    }
}

export {collection, category}




