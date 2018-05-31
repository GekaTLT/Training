import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';



import SubLinks from './header/subLinks.js';



export default class HeaderBlock extends Component {
    constructor(props){
        super(props);
    }

    linkClick(obj){
        let elem = document.getElementsByClassName('header__nav__link');
        for (let i = 0; i<elem.length; i++){
            elem[i].classList.remove('header__nav__link--active');
            elem[i].classList.add('header__nav__link--noactive');
        }
        obj.target.classList.remove('header__nav__link--noactive');
        obj.target.classList.add('header__nav__link--active');
    }

    render(){
            return (
                <header className="header">
                    <Link className="header__logo" to='/'>
                        Спец еда
                    </Link>
                    <nav className="header__nav">
                        <Link onClick={this.linkClick} className="header__nav__link" to='/vegan'>Вегетарианская<br />кухня</Link>
                        {/*<Link onClick={this.linkClick} className="header__nav__link" to='/diabetics'>Рецепты для<br />диабетиков</Link>
                        <Link onClick={this.linkClick} className="header__nav__link" to='/mama'>Рецепты для<br />кормящих мам</Link>
                        <Link onClick={this.linkClick} className="header__nav__link" to='/sport'>Спортивное<br />питание</Link>*/}


                        <Switch>
                            <Route path='/vegan*'>
                                <SubLinks collectionName='vegan'/>
                            </Route>
                            {/*<Route path='/diabetics*'>
                                <SubLinks collectionName='diabetics'/>
                            </Route>
                            <Route path='/mama*'>
                                <SubLinks collectionName='mama'/>
                            </Route>
                            <Route path='/sport*'>
                                <SubLinks collectionName='sport'/>
                            </Route>*/}
                        </Switch>
                        <Switch>
                            <Route path='/vegan*'>
                                <div className="header__chalkboard"><h2>Вегетарианская кухня</h2><p>Вегетарианские, веганские и сыроедные рецепты из простых продуктов будут интересны людям, которые уже практикуют вегетарианство, а также тем, кто задумывается о том, чтобы перейти на вегетарианство.</p></div>
                            </Route>
                            {/*<Route path='/diabetics*'>
                                <div className="header__chalkboard"><h2> Рецепты для диабетиков</h2></div>
                            </Route>
                            <Route path='/mama*'>
                                <div className="header__chalkboard"><h2> Рецепты для кормящих мам</h2></div>
                            </Route>
                            <Route path='/sport*'>
                                <div className="header__chalkboard"><h2> Спортивное питание</h2></div>
                            </Route>*/}
                            <Route exact path='/*'>
                                <div className="header__chalkboard"><h1>Добро пожаловать!</h1></div>
                            </Route>
                        </Switch>
                    </nav>
                </header>
            )
    }
}