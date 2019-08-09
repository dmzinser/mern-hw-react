import React, { Component } from "react";
import { Button, Form, Label } from "semantic-ui-react";

class CreateEmployee extends Component {
  state={
    name: "",
    position: "",
    birthDate: "",
    department: "",
    annualSalary: ""
  };
  updateEmployee = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addEmployee(this.state)
    this.setState({
      name: "",
      position: "",
      birthDate: "",
      department: "",
      annualSalary: ""
    });
  };
  render(){
    const { name, position, birthDate, department, annualSalary } = this.state
    return(
      <div className="ui focus input">
        <Form onSubmit={this.submitHandler}>
          <Label>Name:
            <input type="text" name="name" onChange={this.updateEmployee} value={name}/>
          </Label>
          <Label>Position
            <input type="text" name="position" onChange={this.updateEmployee} value={position}/>
          </Label>
          <Label>Birthdate:
            <input type="date" name="birthDate" onChange={this.updateEmployee} value={birthDate}/>
          </Label>
          <Label>Department:
            <input type="text" name="department" onChange={this.updateEmployee} value={department}/>
          </Label>
          <Label>Salary:
            <input type="text" name="annualSalary" onChange={this.updateEmployee} value={annualSalary}/>
          </Label><br />
          <div className="button">
            <Button type="submit">
              Create Employee
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default CreateEmployee;