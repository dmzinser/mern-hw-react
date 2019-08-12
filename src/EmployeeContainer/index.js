import React, { Component } from "react";
import EmployeeList from "../EmployeeList";
import CreateEmployee from "../CreateEmployee";
import EditEmployee from "../EditEmployee";
import { Redirect } from "react-router-dom";

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
  handleFormChange = (e) => {
    this.setState({
      employeeToEdit: {
        ...this.state.employeeToEdit,
        [e.target.name]: e.target.value
      }
    });
  };
  showModal = async (employee) => {
    this.setState({
      employeeToEdit: employee,
      showEditModal: !this.state.showEditModal
    });
  };
  closeAndEdit = async (e) => {
    e.preventDefault();
    try {
      const editRequest = await fetch(`http://localhost:9000/api/v1/employee/${this.state.employeeToEdit._id}`, {
        method: "PUT",
        body: JSON.stringify(this.state.employeeToEdit),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(editRequest.status !== 200) {
        throw Error("Edit Request NOT Working")
      }
      const editResponse = await editRequest.json();
      const editedEmployeeArray = this.state.employees.map((employee) => {
        if(employee._id === editResponse.data._id){
          employee = editResponse.data
        }
        return employee
      });
      this.setState({
        employees: editedEmployeeArray,
        showEditModal: false
      })
    } catch(err) {
      console.log(err, "closeAndEdit ERROR")
      return err
    }
  };
  deleteEmployee = async (id) => {
    try {
      const deleteRequest = await fetch(`http://localhost:9000/api/v1/employee/${id}`, {
        method: "DELETE",
        body: JSON.stringify(this.state.employeeToEdit),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (deleteRequest.status !== 200) {
        throw Error("Delete Request NOT Working!")
      }
      const deleteResponse = await deleteRequest.json();
      const deletedEmployeeArray = this.state.employees.filter((employee) => {
        return employee._id !== id
      });
      this.setState({
        employees: deletedEmployeeArray
      });
    } catch(err) {
      console.log(err, "Delete Request NOT Working!")
    }
  };
  render(){
    const { employees, showEditModal, employeeToEdit } = this.state
    return(
      <div>
        {
          this.props.isLogged 
          ? (
            <div>
              <EmployeeList employees={employees} showModal={this.showModal} deleteEmployee={this.deleteEmployee}/>
              <CreateEmployee addEmployee={this.addEmployee}/>
              {showEditModal ? <EditEmployee closeAndEdit={this.closeAndEdit} employeeToEdit={employeeToEdit} handleFormChange={this.handleFormChange} /> : null}
            </div>
          ) : <Redirect to="/" />
        }
      </div>
    )
  };
}

export default EmployeeContainer;