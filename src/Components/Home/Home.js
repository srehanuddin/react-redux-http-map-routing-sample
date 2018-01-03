import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Navbar example</h1>
                <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
            </div>
        </div>
    );
  }
}

export default Header;

