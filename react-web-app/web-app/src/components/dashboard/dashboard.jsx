import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './dashboard.scss';
import { userInfoDataFetcher } from '../../dataFetchers/userInfoFetcher';
import Navbar from 'react-bootstrap/Navbar';
import { storage } from '../../storage/localforage';
import { Container } from 'react-bootstrap';

const queryString = require('query-string');

class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.location);
        const queryParamString = this.props.location.search;
        let queryParam = queryString.parse(queryParamString);
        this.state = {
            userGUID: queryParam.userGUID
        };
        this.props.userInfoDataFetcher(this.state.userGUID);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props && this.props.data !== prevProps.data) {
            console.log(this.props.data);

        }

        if (this.props && this.props.error !== prevProps.error) {

        }
    }

    onSelect(e) {
        storage.removeItem("userGUID");
        this.props.history.push("/login");
    }


    render() {
        const userInfo = this.props.data;

        return (
            <Container>
                <Navbar>
                    <Navbar.Brand className="home">Home Page</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a onClick={this.onSelect}>logout</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                {
                    userInfo && userInfo.data &&
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>UserGUID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.userGUID}</td>
                                <td>{userInfo.data.fname}</td>
                                <td>{userInfo.data.lname}</td>
                                <td>{userInfo.data.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.userData.error,
        data: state.userData.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userInfoDataFetcher: (userGUID) => dispatch(userInfoDataFetcher(userGUID))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));