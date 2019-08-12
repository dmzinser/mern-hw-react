import React from "react";
import { Form, Label, Button } from "semantic-ui-react";

const EditEmployee = (props) => {
  return(
    <div>
      <div className="header">
        <h4 className="ui block header">Edit Employee</h4>
      </div>
      <div className="ui input field">
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            <input type="text" name="name" onChange={props.handleFormChange} value={props.employeeToEdit.name}/>
          </Label>
          <Label>
            <input type="text" name="position" onChange={props.handleFormChange} value={props.employeeToEdit.position}/>
          </Label>
          <Label>
            <input type="text" name="birthDate" onChange={props.handleFormChange} value={props.employeeToEdit.birthDate}/>
          </Label>
          <Label>
            <input type="text" name="department" onChange={props.handleFormChange} value={props.employeeToEdit.department}/>
          </Label>
          <Label>
            <input type="text" name="annualSalary" onChange={props.handleFormChange} value={props.employeeToEdit.annualSalary}/>
          </Label><br />
          <div className="button">
            <Button type="submit">
              Update Employee
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EditEmployee;