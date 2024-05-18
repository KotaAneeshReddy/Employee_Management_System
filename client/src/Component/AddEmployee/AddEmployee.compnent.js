import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./AddEmployee.styles.css";
import PostEmployee from "../../Service/PostEmployee.service";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    role: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const RegisterEmployee = (e) => {
    e.preventDefault();

    PostEmployee(employee)
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

  return (
    <div>
      <div className="heading">
        <h1>Employee Management System</h1>
      </div>
      <div className="add-employee">
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
      </div>
    </div>
  );
}

export default AddEmployee;
