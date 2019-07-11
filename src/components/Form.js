import React, { Component }from 'react';
import './style.css';

class Form extends Component {
    render(){
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>HiHi popup?</h1>
                    <button onClick={this.props.closeForm}>Close</button>
                </div>
            </div>
        );
    }
}

export default Form;
