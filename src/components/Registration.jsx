import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
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

  formIsValidated = () => {
    let isValidated = false;
    if (
      this.state.registration.name.length >= 2 &&
      this.state.registration.surname.length >= 3 &&
      this.state.registration.password.length >= 8 &&
      this.state.registration.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
      ) &&
      this.state.registration.password ===
        this.state.registration.confirmPassword
    ) {
      isValidated = true;
    }
    return isValidated;
  };

  handleRegistration = (e) => {
    e.preventDefault();
    this.setState({
      showComplete: true,
    });
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
            <h1>Registration form</h1>
            <Form onSubmit={this.handleRegistration}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => this.handleInput("name", e.target.value)}
                  value={this.state.registration.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => this.handleInput("surname", e.target.value)}
                  value={this.state.registration.surname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(e) => this.handleInput("email", e.target.value)}
                  value={this.state.registration.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => this.handleInput("password", e.target.value)}
                  value={this.state.registration.password}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) =>
                    this.handleInput("confirmPassword", e.target.value)
                  }
                  value={this.state.registration.confirmPassword}
                />
              </Form.Group>
              <Button type="submit" disabled={!this.formIsValidated()}>
                Register
              </Button>
            </Form>
          </>
        )}
      </div>
    );
  }
}

export default Registration;
