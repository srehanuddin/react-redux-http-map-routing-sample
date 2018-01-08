import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    console.log("user", state)
    return { ...state }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: function(){
            dispatch({type: 'LOGOUT'});
        }
    };
}

class Header extends Component {
  render() {

    /*let button = null;
    if (this.props.user) {
      button = <input className="form-control mr-sm-2" type="text" disabled />
      <NavLink to="/Users" className="btn btn-outline-primary my-2 my-sm-0" activeClassName="active" >Logout</NavLink>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }*/

    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to="/" className="navbar-brand" >Sample App</NavLink>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active" >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Users" className="nav-link" activeClassName="active" >Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Posts" className="nav-link" activeClassName="active" >All Posts</NavLink>
                    </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    
                    { 
                        this.props.user 
                        ? 
                        <div>
                            <input className="form-control mr-sm-2" type="text" disabled value={this.props.user.name} />
                            <button onClick={this.props.logout.bind(this)}  className="btn btn-outline-primary my-2 my-sm-0" >Logout</button>
                        </div>
                        : 
                        <NavLink to="/Users" className="btn btn-outline-primary my-2 my-sm-0" activeClassName="active" >Login</NavLink>
                    }

                </form>
            </div>
        </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

