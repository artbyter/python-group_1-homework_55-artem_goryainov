import React from 'react'
import './form.css'

class BurgerForm extends React.Component {
    counter = 0;

    render() {
        return (
            <div className="container">
                <h2> Price of the burger is {this.props.total}</h2>
                <form className="w-50  mx-auto burger_form">
                    {this.props.names.map(name => <BurgerFormLine key={name + this.counter++} ingredientName={name}
                                                                  price={this.props.ingredients[name].total}
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
                <div className="container">
                    <div className="row">
                        <label className=' float-left col-2'>{this.props.ingredientName}</label>
                        <div className='d-inline-block col-7'>
                            <button disabled={this.props.isDisabled} className="btn lessButton mx-2"
                                    onClick={() => this.props.func(this.props.ingredientName, '-')}>Less
                            </button>
                            <button className="btn moreButton "
                                    onClick={() => this.props.func(this.props.ingredientName, '+')}>More
                            </button>
                        </div>
                        <p className='d-inline-block float-right col-3'>Price: {this.props.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BurgerForm