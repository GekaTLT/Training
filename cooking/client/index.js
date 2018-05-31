
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import allReducers from './reducers/allReducers.js';


import HeaderBlock from './components/header.js';
import Main from './components/main.js';


import {collection} from './nativeJS/url';


const store = createStore(allReducers, applyMiddleware(thunk)); //асинхроные action
window.store = store; // store в window для консоли


ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <HeaderBlock />
                <div className="main">
                    <Main />
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


/*проверка и добавление класса при обновление*/
(function(){
    let elem = document.getElementsByClassName('header__nav__link');
    if (collection() === 'vegan' || collection() === 'diabetics' || collection() === 'mama' || collection() === 'sport') {
        for (let i = 0; i<elem.length; i++){
            if (elem[i].getAttribute('href').slice(1) === collection()){
                elem[i].classList.add('header__nav__link--active');
            }
            else {
                elem[i].classList.add('header__nav__link--noactive');
            }
        }
    }
})();
