import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Card from '../components/Card';

// Create styled component for the Contact page layout
const FormContainer = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 40px;
`;

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      phoneNumber: '',
      message: ''
    }
  }

  handleNameFieldChange = (event) => {
    // Update the state for the name field
    this.setState({
      name: event.target.value,
    });
  }

  handlePhoneNumberFieldChange = (event) => {
    // UPdate the state for the phone number field
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  handleMessageFieldChange = (event) => {
    this.setState({
      // Update the state for the message field
      message: event.target.value
    });
  }

  // Method for handling the form submitssion
  handleSubmit = () => {
    const { name, phoneNumber, message} = this.state;
    console.log ({ 
      name, phoneNumber, message
    });

    // Clear the form input fields upon clicking the submit button
    this.setState({
      name: '',
      phoneNumber: '',
      message: ''
    });
  }

  render() {
    const { name, phoneNumber, message } = this.state;

    return(
      <FormContainer>
        <Card>
          <h1 className="p-3">Customer Service </h1>
          <p className="lead pt-2">Let us know how we can help serve you better.</p>
          <div className="form-group text-left">
            <label htmlFor="name" className="pt-3">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="form-control" 
              value={name}
              onChange={(e) => this.handleNameFieldChange(e)}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="phoneNumber" className="pt-2">Phone Number:</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              className="form-control" 
              placeholder="123-456-7890" required              
              value={phoneNumber}               
              onChange={(e) => this.handlePhoneNumberFieldChange(e)}
            />
          </div>             
          <div className="form-group text-left">
            <label htmlFor="message" className="pt-2" >Message:</label>
            <textarea 
              name="message" 
              id="message" 
              className="form-control" 
              row="7"  
              value={message}
              onChange={(e) => this.handleMessageFieldChange(e)}  
            ></textarea>
          </div>
          <div className="form-group">
            <Button className="m-3" onClick={this.handleSubmit}>Submit</Button>
            <p className="lead">(Open console to see entered values of submission.)</p>
          </div>        
        </Card>
      </FormContainer>
    );
  }  
}

export default Contact;