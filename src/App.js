import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import BurgerForm from './form.js'
import Burger from './burger'

class App extends Component {


    names = ['Salad', 'Cheese', 'Meat', 'Bacon']
    state = {
        ingredients: {
            'Salad': {count: 1, total: 0},
            'Cheese': {count: 2, total: 0},
            'Meat': {count: 2, total: 0},
            'Bacon': {count: 1, total: 0},
        }
    }

    AddIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let ingredients = {...this.state.ingredients};
        ingredient.count += 1
        ingredients[name] = ingredient;
        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };

    RemoveIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let ingredients = {...this.state.ingredients};
        ingredient.count -= 1
        ingredients[name] = ingredient;
        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };


    render() {
        return (
            <div className="App">
                <Burger names={this.names} ingredients={this.state.ingredients}/>


                <BurgerForm ingredients={this.state.ingredients} names={this.names} functionAdd={this.AddIngredient}
                            functionRemove={this.RemoveIngredient}/>
            </div>
        );
    }
}

export default App;
