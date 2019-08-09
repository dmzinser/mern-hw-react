import React, { Component } from "react";
import EmployeeList from "../EmployeeList";
import CreateEmployee from "../CreateEmployee"

class EmployeeContainer extends Component {
  state={
    employees: [],
    showEditModal: false,
    employeeToEdit: {
      name: "",
      position: "",
      birthDate: "",
      department: "",
      annualSalary: ""
    }
  };
  componentDidMount(){
    this.getEmployees();
  };
  addEmployee = async (employee) => {
    try {
      const addEmployee = await fetch("http://localhost:9000/api/v1/employee", {
        method: "POST",
        body: JSON.stringify(employee),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(addEmployee.status !== 200) {
        throw Error("Resource Not Found")
      }
      const addEmployeeResponse = await addEmployee.json();
      this.setState({
        employees: [...this.state.employees, addEmployeeResponse.data]
      });
    } catch(err) {
      console.log(err, "addEmployee ERROR")
    }
  };
  getEmployees = async () => {
    try {
      const responseGetEmployees = await fetch("http://localhost:9000/api/v1/employee", {
        credentials: "include"
      });
      if(responseGetEmployees.status !== 200) {
        throw Error("404 from Server")
      }
      const employeesResponse = await responseGetEmployees.json();
      this.setState({
        employees: [...employeesResponse.data]
      });
    } catch(err) {
      console.log(err, "getEmployees ERROR")
    }
  };
  render(){
    const { employees } = this.state
    return(
      <div>
        <EmployeeList employees={employees} />
        <CreateEmployee addEmployee={this.addEmployee}/>
      </div>
    )
  };
}

export default EmployeeContainer;