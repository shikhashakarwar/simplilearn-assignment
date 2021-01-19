import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import './signup.scss';
import { signupDataFeatcher } from '../../dataFetchers/signFetcher';
import { withRouter } from 'react-router-dom';

class SignupComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            newPassword: '',
        }

        this.onSignupClick = this.onSignupClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props && this.props.data !== prevProps.data) {
            if(this.props.data.userCreated) {
                this.props.history.push('/login');
            }
        }

        if(this.props && this.props.error !== prevProps.error) {

        }
    }

    onSignupClick(e) {
        e.preventDefault();
        const payload = {
            fname: this.state.firstName,
            lname: this.state.lastName,
            email: this.state.email,
            password: this.state.newPassword
        }
        this.props.signupDataFeatcher(payload);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="signup">
                <h5 className="text-center"> Signup page</h5>
                <Form noValidate onSubmit={this.onSignupClick}>
                    <Form.Row>
                    <Form.Group as={Col} controlId="firstName" size="lg">    
                        <Form.Control autoFocus type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter First Name" required>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName" size="lg">   
                        <Form.Control autoFocus type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Enter Last Name" required>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="email" size="lg">   
                        <Form.Control autoFocus type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email Address" required>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="newPassword" size="lg">
                        <Form.Control autoFocus type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} placeholder="Enter New Password" required>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg">Sign up</Button>
                </Form>
                {this.props.error &&
                <div className="text-danger">{this.props.error.message}</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.signupData.error,
        data: state.signupData.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signupDataFeatcher: (data) => dispatch(signupDataFeatcher(data))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupComponent));