import React, { Component } from "react";
import { Button, Form, Label } from "semantic-ui-react";

class CreateEmployee extends Component {
  state={
    name: "",
    position: "",
    birthDate: Date,
    department: "",
    annualSalary: ""
  };
  render(){
    const { name, position, birthDate, department, annualSalary } = this.state
    return(
      <div className="ui focus input">
        <Form>
          <Label>Name:
            <input type="text" name="name" value={name}/>
          </Label>
          <Label>Position
            <input type="text" name="position" value={position}/>
          </Label>
          <Label>Birthdate:
            <input type="date" name="birthDate" value={birthDate}/>
          </Label>
          <Label>Department:
            <input type="text" name="department" value={department}/>
          </Label>
          <Label>Salary:
            <input type="text" name="annualSalary" value={annualSalary}/>
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