import React, { Component } from 'react';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';

import Config from './../../Config';

import './Posts.css';

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
            <Get url={this.state.baseURL + 'posts'} >
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
                                            <h4 className="card-title">{item.title}</h4>
                                            <p className="card-text">
                                                <span>{item.body}</span>
                                            </p>
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

