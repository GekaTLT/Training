import React, {Component} from 'react';



export default class Recipe extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="recipes__recipe">
                <div className="recipes__recipe__name">{this.props.recipe.name}</div>
                <div className="recipes__recipe__description">{this.props.recipe.description}</div>
                <div className="recipes__recipe__ingredients">{this.props.recipe.ingredients}</div>
                <div className="recipes__recipe__cooking">{this.props.recipe.cooking}</div>
            </div>
        )
    }
}