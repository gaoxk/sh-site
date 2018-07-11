import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import ResourceStrings from './ResourceStrings';

class ContactComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
    render() {
        return (
            <div className='container contact'>
              <h1>{ResourceStrings.contact}</h1>
              <form>
                <FormGroup
                  controlId="formBasicText"
                >
                  <ControlLabel>{ResourceStrings.contact_name}</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                  />
                  <ControlLabel>{ResourceStrings.contact_email}</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.email}
                  />
                  <ControlLabel>{ResourceStrings.contact_message}</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    value={this.state.message}
                  />
                </FormGroup>
              </form>
          </div>
        );
    }
}

export default ContactComponent;
