import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props);
        // this.robots = props.robots;
    }

    // cardArray = () => this.robots.map((user, i) => {
    //     return <Card
    //                 key={this.robots[i].id}
    //                 id={this.robots[i].id}
    //                 name={this.robots[i].name}
    //                 email={this.robots[i].email}
    //             />;
    // });

    render() {
        return (
            <div>
                {this.props.robots.map((user, i) => {
                    return <Card
                                key={this.props.robots[i].id}
                                id={this.props.robots[i].id}
                                name={this.props.robots[i].name}
                                email={this.props.robots[i].email}
                            />;
                })}
            </div>
        );
    }
}

export default CardList;
