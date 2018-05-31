import React, {Component} from 'react';



import Performance from './collectionsMain/performance';


export default class MainPage extends Component {
    render(){
        return (
            <main className='colectionsMain'>
                <div className="colectionsMain__colection">
                    <h2>Вегетарианская кухня</h2>
                    <p>Вегетарианские, веганские и сыроедные рецепты из простых продуктов будут интересны людям, которые уже практикуют вегетарианство, а также тем, кто задумывается о том, чтобы перейти на вегетарианство.</p>
                    <Performance collectionName='vegan'/>
                </div>
                <div className="colectionsMain__colection">
                    <h2> Рецепты для диабетиков</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur dolorum earum eius facilis fugiat molestias mollitia non omnis, pariatur provident, quod rem sapiente sunt tempore. Dolor laudantium ratione tempora!</p>
                    <Performance collectionName='diabetics'/>
                </div>
                <div className="colectionsMain__colection">
                    <h2> Рецепты для кормящих мам</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos, doloribus ducimus expedita laboriosam quo tempore. Amet eos, sequi! Ab aliquam commodi doloremque pariatur quasi! Eos nam optio saepe suscipit.</p>
                    <Performance collectionName='mama'/>
                </div>
                <div className="colectionsMain__colection">
                    <h2> Спортивное питание</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequatur debitis ex fuga illum magnam molestias mollitia nostrum numquam omnis optio quaerat sequi, sint temporibus totam ullam vero voluptate.</p>
                    <Performance collectionName='sport'/>
                </div>
            </main>
        )
    }
}