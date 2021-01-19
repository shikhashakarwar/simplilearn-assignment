import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import './login.scss';
import { loginDataFeatcher } from '../../dataFetchers/loginDataFetcher';
import { withRouter } from 'react-router-dom';
import { storage } from "../../storage/localforage";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        const userGUID = storage.getItem("userGUID");
        if(userGUID) {
            this.props.history.push(`/dashboard/?userGUID=${userGUID}`);
        }
        this.onLoginClick = this.onLoginClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props && this.props.data !== prevProps.data) {
            if(this.props.data.success) {
                this.props.history.push(`/dashboard/?userGUID=${this.props.data.userGUID}`);
                storage.setItem("userGUID", this.props.data.userGUID)
            }
        }

        if(this.props && this.props.error !== prevProps.error) {

        }
    }

    onLoginClick(e) {
        e.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginDataFeatcher(payload);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h5 className="text-center login"> Login page</h5>
                <div className="signup">
                    <Form noValidate onSubmit={this.onLoginClick}>
                        <Form.Group controlId="email" size="lg">   
                            <Form.Control autoFocus type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email Address" required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="password" size="lg">
                            <Form.Control autoFocus type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" required>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg">Login</Button>
                    </Form>
                </div>
                {this.props.error &&
                <div className="text-danger">{this.props.error.message}</div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.loginData.error,
        data: state.loginData.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginDataFeatcher: (data) => dispatch(loginDataFeatcher(data))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));