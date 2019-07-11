import React, { Component } from 'react';
import Form from './components/Form';


class App extends Component {
  constructor(props){
    super(props);
    this.toggleForm=this.toggleForm.bind(this);
    this.state = {showForm: false};
  }
  toggleForm(){
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render(){
    return(
        <div>
          {/*<div className='popup_inner'>*/}
            <h1>Show how to display pop up</h1>
            <button onClick={this.toggleForm}>Click to open form</button>
            { this.state.showForm ?
                <Form
                    closeForm = {this.toggleForm} /> : null
            }
          {/*</div>*/}
        </div>
    );
  }
}
export default App;
