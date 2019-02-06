import React from 'react'

class BurgerForm extends React.Component {
    counter = 0;

    render() {
        return (
            <div className="container">
                <h2> Price of the burger is {this.props.total}</h2>
                <form className="bg-warning w-50  mx-auto ">
                    {this.props.names.map(name => <BurgerFormLine key={name + this.counter++} ingredientName={name} price={this.props.ingredients[name].total}
                                                                  func={this.props.function}
                                                                  isDisabled={this.props.ingredients[name].count == 0 ? true : false}/>)}

                </form>
            </div>
        )
    }
}

class BurgerFormLine extends React.Component {
    render() {
        return (
            <div className="form-group  text-center m-3 p-3">

                <label>{this.props.ingredientName}</label>
                <button disabled={this.props.isDisabled} className="btn btn-primary"
                        onClick={() => this.props.func(this.props.ingredientName,'-')}>Less
                </button>
                <button className="btn btn-primary" onClick={() => this.props.func(this.props.ingredientName,'+')}>More
                </button>
                <p>Price: {this.props.price}</p>
            </div>
        )
    }
}

export default BurgerForm