import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class BooksForm extends Component {
  render() {
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl 
              type= "text"
              placeholder = "Enter Title"
              ref = "title" />
          </FormGroup>
          <FormGroup controlId="Description">
            <ControlLabel>Description</ControlLabel>
            <FormControl 
              type= "text"
              placeholder = "Enter Description"
              ref = "Description" />
          </FormGroup>
          <FormGroup controlId="Price">
            <ControlLabel>Price</ControlLabel>
            <FormControl 
              type= "text"
              placeholder = "Enter Price"
              ref = "Price" />
          </FormGroup>
          <Button bsStyle="primary">Save book</Button>
        </Panel>
      </Well>
    )
  }
}

export default BooksForm;