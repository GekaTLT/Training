'use strict';
/*document.body.addEventListener("click", function (elem) {
    console.log(elem);
    clear();
    popupClick(elem)
});*/

document.body.addEventListener("focus", function (elem) {
    console.log(elem);
    clear();
    popupClick(elem)
});

function popupClick(elem) {
    if ( elem.target.getAttribute('data-popup') ) {
        createPopup(elem.target, elem.target.getAttribute('data-popup'))
    }
    if ( elem.target.getAttribute('data-popup-template') ) {
        const popupTemplate = document.getElementById('template-login-popup').outerText;
        createPopup(elem.target, popupTemplate)
    }
}

function f() {

}

function clear() {
    if (document.getElementById('popup')) {
        document.getElementById('popup').remove();
    }
}


function createPopup(parentElem, content) {
    const div = document.createElement('div');
    const decorDiv = document.createElement('div');
    div.setAttribute('id','popup');
    parentElem.style.position = 'relative';
    div.style.backgroundColor = '#eae8e8';
    div.style.position = 'absolute';
    div.style.zIndex = '100';

    decorDiv.style = `
            position: absolute;
            width: 0;
            height: 0;
    `;
    div.innerHTML = content;
    div.appendChild(decorDiv);


    parentElem.appendChild(div);

    const widthElem = parentElem.getBoundingClientRect().width + 10;
    const heightElem = parentElem.getBoundingClientRect().height + 10;
    switch (parentElem.getAttribute('data-popup-side')){
        case 'left':
            div.style.top = '0';
            div.style.right = `${widthElem}px`;

            decorDiv.style.top = '0';
            decorDiv.style.right = `-20px`;
            decorDiv.style.borderRight = '10px solid transparent';
            decorDiv.style.borderLeft = '10px solid #eae8e8';
            decorDiv.style.borderTop = '10px solid transparent';
            decorDiv.style.borderBottom = '10px solid transparent';
            break;
        case 'right':
            div.style.top = '0';
            div.style.left = `${widthElem}px`;

            decorDiv.style.top = '0';
            decorDiv.style.left = `-20px`;
            decorDiv.style.borderRight = '10px solid #eae8e8';
            decorDiv.style.borderLeft = '10px solid transparent';
            decorDiv.style.borderTop = '10px solid transparent';
            decorDiv.style.borderBottom = '10px solid transparent';
            break;
        case 'above':
            div.style.bottom = `${heightElem}px`;
            div.style.left = `0px`;

            decorDiv.style.bottom = '-20px';
            decorDiv.style.left = `0`;
            decorDiv.style.borderRight = '10px solid transparent';
            decorDiv.style.borderLeft = '10px solid transparent';
            decorDiv.style.borderTop = '10px solid #eae8e8';
            decorDiv.style.borderBottom = '10px solid transparent';
            break;
        default:
            div.style.top = `${heightElem}px`;
            div.style.left = `0`;

            decorDiv.style.top = '-20px';
            decorDiv.style.left = `0`;
            decorDiv.style.borderRight = '10px solid transparent';
            decorDiv.style.borderLeft = '10px solid transparent';
            decorDiv.style.borderTop = '10px solid transparent';
            decorDiv.style.borderBottom = '10px solid #eae8e8';
            break;
    }
}