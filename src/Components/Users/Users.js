import React, { Component } from 'react';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Config from './../../Config';

import './Users.css';


function mapStateToProps(state) {
    console.log("user", state)
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        login: function(user){
            dispatch({type: 'LOGIN', user : user});
        }
    };
}


class Users extends Component {
    constructor(){
        super();

        this.state = {
            baseURL : Config.BaseURL
        }
    }
  render() {

    return (
        <div className="container">
            <Get url={this.state.baseURL + 'users'} >
                {(error, response, isLoading, onReload) => {
                    console.log(response);
                if(error) {
                    return (<div className="text-center">Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                    return (<div className="text-center">Loading...</div>)
                }
                else if(response !== null) {
                    return (
                        <div className="container">
                            <div className="row">
                                {response.data.map(item => <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={item.id}>
                                    <div className="card mb-3">
                                        <div className="card-block box-shadow">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-text">
                                                <span>{item.username}</span>
                                                <span>{item.email}</span>
                                            </p>
                                            <Link to={"/Users/" + item.id} className="btn btn-primary btn-sm">View</Link>
                                            <button onClick={this.props.login.bind(this, item)} className="btn btn-primary btn-sm ml-1">Login</button>
                                        </div>
                                    </div>
                                </div>)} 
                            </div>
                            <div className="mt-2 mb-4 text-center">
                                <button className="btn" onClick={() => onReload({ params: { refresh: true } })}>Refresh</button>
                            </div>
                        </div>
                    )
                }
                return (<div>{response} Default message before request is made.</div>)
                }}
            </Get>

        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

