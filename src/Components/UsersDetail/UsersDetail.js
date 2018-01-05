import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

import './UsersDetail.css';

import Config from './../../Config';
import Map from './../-Map/Map';

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            baseURL : Config.BaseURL,
            id : this.props.match.params.id
        }

    }
  render() {

    return (
        <div className="container">

            <Get url={this.state.baseURL + 'users/' + this.state.id} >
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
                            <div className="jumbotron">
                                <h1>{response.data.name} ({response.data.username})</h1>
                                <p className="lead">
                                    Email : <a mailto={response.data.email} >{response.data.email}</a>
                                    <br />
                                    Phone : <a tel={response.data.phone} >{response.data.phone}</a>
                                    <br />
                                    Website : <a href={response.data.website} target="_blank" >{response.data.website}</a>
                                    <br />
                                    Address : <a href={'http://maps.google.com/?q=' + response.data.address.geo.lat + ',' + response.data.address.geo.lng} target="_blank" >{response.data.address.suite} {response.data.address.street} {response.data.address.city} {response.data.address.zipcode}</a>
                                    <br />

                                </p>

                                <Map isMarkerShown />

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

