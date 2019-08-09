import React from "react";
import { List, Button } from "semantic-ui-react";

const Employees = (props) => {
  const { employees } = props
  return(
    <div>
      <h1 className="ui block header">Employee List</h1>
      <div>
        {employees.map((e) => {
          return (
            <List>
              <div role="list" class="ui list">
                <li key={e._id}>
                <span>Name: {e.name}</span><br />
                <span>Position: {e.position}</span>
                <span>Birth Date: {e.birthDate}</span>
                <span>Department: {e.department}</span>
                <span>Salary: {e.annualSalary}</span>
                </li>
              </div>
            </List>
          )
        })}
      </div>
    </div>
  )
}

export default Employees;