import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

import Config from './../../Config';

import './Users.css';

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
                                {response.data.map(item => <div className="col-md-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-block">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p class="card-text">
                                                <span>{item.username}</span>
                                                <span>{item.email}</span>
                                            </p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
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

export default Users;

