import React, { useState, useEffect } from "react";
import { getEmployees } from "../../Service/Employee.service";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./Employee.styles.css";
import UpdateEmployee from "../UpdateEmployee/UpdateEmployee.component";
import { DeleteEmployee } from "../../Service/DeleteEmployee.service";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    role: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const result = await getEmployees();
        setEmployees(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const RegisterEmployee = (e) => {
    e.preventDefault();

    UpdateEmployee(employee)
      .then((res) => {
        console.log("Employee Added Successfully");
        setEmployee({
          fullName: "",
          email: "",
          phoneNumber: "",
          gender: "",
          role: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (currentEmployee) => {
    DeleteEmployee(currentEmployee).then((res) => {
      console.log("Employee Deleted Succesfully");
      window.location.reload();
    });
  };
  return (
    <div className="employee-table">
      <div>
        <div className="heading">
          <h1>Employee Management System</h1>
        </div>
        <div>
          <Link to="/add-employee">
            <Button variant="primary">Add Employee</Button>
          </Link>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Emp Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{employee.emp_id}</td>
                  <td>{employee.fullName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.role}</td>
                  <td>
                    <span className="span-button">
                      <Button variant="primary" onClick={handleShow}>
                        Update
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="success"
                        onClick={() => {
                          handleDelete(employee);
                        }}
                      >
                        Delete
                      </Button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                RegisterEmployee(e);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={employee.fullName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={employee.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={employee.phoneNumber}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your phone number with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={employee.gender}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option>Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not Sure">Not Sure</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select role</Form.Label>
                <Form.Select
                  name="role"
                  value={employee.role}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option>Select One</option>
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Human Resources">Human Resources</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Employee;
