import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.searchChange = props.onSearchChange;
    }
    render() {
        return (
            <div className='pa2'>
                <input
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search'
                    placeholder='search robots'
                    onChange={this.searchChange}
                />
            </div>
        );
    }
}

export default SearchBox;
