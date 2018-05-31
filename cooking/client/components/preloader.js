import React, {Component} from 'react';



export default class Preloader extends Component {
    render(){
        return(
            <div className='preloader'>
                <div className="preloader__img">
                    <img src="img/preloader.gif" alt="loader"/>
                </div>
            </div>
        )
    }
}