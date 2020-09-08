import React, { Component } from 'react';
import './BaseLayout.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="menu">
            <ul>
              <Link to={'/'}>Home</Link>
              <Link to={'/about'}>About</Link>
            </ul>
          </nav>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
export default connect()(BaseLayout);