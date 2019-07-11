import React, { Component }from 'react';
import './style.css';

class Form extends Component {
    render(){
        return (
            <div>
                <h1>HiHi popup?</h1>
                <button onClick={this.props.closeForm}>Close</button>
            </div>
        );
    }
}

export default Form;
