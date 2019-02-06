import React from 'react'

class Burger extends React.Component {

    render() {
        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {this.props.names.map((name) => {
                    let finString = [];
                    for (let i = 0; i < this.props.ingredients[name].count; i++) {

                        finString.push(<div key={name + i} className={name}></div>)
                    }
                    return finString
                })}

                <div className="BreadBottom"></div>
            </div>)

    }

}


class Ingredient extends React.Component {


    render() {

        return <div className="Salad"></div>

    }
}

export default Burger