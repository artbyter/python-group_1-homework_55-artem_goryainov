import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import BurgerForm from './form.js'
import Burger from './burger'

class App extends Component {

    constructor(props) {
        super(props);
        this.names = ['Salad', 'Cheese', 'Meat', 'Bacon','Pickles','Chicken'];
        this.prices = [5, 20, 50, 30,10,40];
        let ingreds={}

        this.state = {
            ingredients: {
                [this.names[0]]: {count: 0, total: 0},
                [this.names[1]]: {count: 0, total: 0},
                [this.names[2]]: {count: 0, total: 0},
                [this.names[3]]: {count: 0, total: 0},
                [this.names[4]]: {count: 0, total: 0},
                [this.names[5]]: {count: 0, total: 0},
            },
            total: 20,
        };
    }


    ChangeIngredient = (name, operation) => {
        let ingredient = {...this.state.ingredients[name]};
        let ingredients = {...this.state.ingredients};
        let price = this.prices[this.names.indexOf(name)];
        let total = this.state.total;
        if (operation === '+') {
            ++ingredient.count;
            ingredient.total += price;
            total += price;
        } else {
            --ingredient.count;
            ingredient.total -= price;
            total -= price;
        }
        ingredients[name] = ingredient;
        let state = {...this.state};
        state.ingredients = ingredients;
        state.total = total;
        this.setState(state);
    };


    render() {
        return (
            <div className="App">
                <Burger names={this.names} ingredients={this.state.ingredients}/>


                <BurgerForm ingredients={this.state.ingredients} names={this.names} total={this.state.total}
                            function={this.ChangeIngredient}
                />
            </div>
        );
    }
}

export default App;
