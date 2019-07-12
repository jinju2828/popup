import React, { Component }from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {
    render(){
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    {/*<div style={{"marginLeft":"10px"}}>*/}
                        <h3 style={{"marginLeft":"10px", "marginTop":"10px"}}>Customer Support Form</h3>
                        <form>
                            {/*<div className="container">*/}
                                <div className="container-fluid">
                                    <div className="row">
                                        {/*<div>*/}
                                        <div className="col-6" style={{"display": "flex"}}>
                                            <div>
                                                <strong>Name: </strong>
                                            <input type="text" name="name" placeholder="name" style={{"width":"100%"}}/>
                                            </div>
                                        </div>
                                        {/*<div>*/}
                                        <div className="col-6" style={{"display": "flex"}}>
                                            <div>
                                                <strong>Email: </strong>
                                            <input type="email" name="email" placeholder="email" style={{"width":"100%"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <strong>Type: </strong>
                                        <label htmlFor="talent">Talent</label>
                                        <input name="user" id="talent" type="radio" value="Talent" style= {{"margin-right": "5px", "margin-left": "5px"}} />
                                        <label htmlFor="brand">Brand</label>
                                        <input name="user" id="brand" type="radio" value="Brand" style={{"margin-left": "5px"}} />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="category"><strong>Category: </strong></label>
                                        <br />
                                        <select id="category" name="Category">
                                            <option value="" disabled selected hidden>-Select a Category-</option>
                                            <option value="Portal">Portal Inquiry</option>
                                            <option value="Campaign">Campaign</option>
                                            <option value="Bug">Bug Report</option>
                                            <option value="General">General Question</option>
                                        </select>
                                    </div>
                                    <br />
                                    <strong>Subject: </strong><br />
                                    <input type="text" name="subject" placeholder="subject" style={{"width":"100%"}} />
                                    <br />
                                    <br />
                                    <strong>Description:</strong><br />
                                    <textarea type="text" name="description" placeholder="description" style={{"width":"100%", "height":"100%"}} />
                                    <br />
                                    <br />
                                </div>
                            {/*</div>*/}
                        </form>
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <button>Submit</button>
                    <button onClick={this.props.closeForm}>Close</button>
                </div>
            </div>
            //     </div>
            // </div>
        );
    }
}

export default Form;
