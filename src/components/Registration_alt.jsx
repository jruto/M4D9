import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Registration extends Component {
  state = {
    registration: {},
    registrationErrors: {},
    showComplete: false,
  };

  handleInput = (key, value) => {
    this.setState({
      registration: {
        ...this.state.registration,
        [key]: value,
      },
    });
  };

  handleRegistration = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (this.state.registration.name.length < 2) {
      formErrors.name = "Name is too short";
    }
    if (this.state.registration.surname.length < 3) {
      formErrors.surname = "Surname is too short";
    }
    if (
      this.state.registration.password.length < 8 ||
      !this.state.registration.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
      )
    ) {
      formErrors.password = "Password not valid";
    }
    if (
      this.state.registration.password !==
      this.state.registration.confirmPassword
    ) {
      formErrors.confirmPassword = "Does not match password";
    }
    this.setState(
      {
        registrationErrors: {},
      },
      () => {
        if (Object.keys(formErrors).length === 0) {
          this.setState({
            showComplete: true,
          });
        } else {
          this.setState({
            registrationErrors: formErrors,
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        {this.state.showComplete ? (
          <>
            <h1>Registration complete!</h1>
            <h3>Your details:</h3>
            <p>{this.state.registration.name}</p>
            <p>{this.state.registration.surname}</p>
            <p>{this.state.registration.email}</p>
          </>
        ) : (
          <>
            <h1>Registration form (with field validation)</h1>
            <Form onSubmit={this.handleRegistration}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  isInvalid={this.state.registrationErrors.name}
                  onChange={(e) => this.handleInput("name", e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.registrationErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  isInvalid={this.state.registrationErrors.surname}
                  onChange={(e) => this.handleInput("surname", e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.registrationErrors.surname}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  isInvalid={this.state.registrationErrors.email}
                  onChange={(e) => this.handleInput("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  isInvalid={this.state.registrationErrors.password}
                  onChange={(e) => this.handleInput("password", e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.registrationErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  isInvalid={this.state.registrationErrors.confirmPassword}
                  onChange={(e) =>
                    this.handleInput("confirmPassword", e.target.value)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.registrationErrors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Register</Button>
            </Form>
          </>
        )}
      </div>
    );
  }
}

export default Registration;
