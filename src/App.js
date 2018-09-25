import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import MyProfileContainer from './containers/MyProfileContainer'
import AllProfilesContainer from './containers/AllProfilesContainer'

class App extends Component {
  constructor(props) {
    super(props)

    document.title = 'My Profile'
  }

  render() {
    return (
      <div>
        <Navbar inverse style={{ borderRadius: 0 }}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">My Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={1} href="/profiles">
              All Profiles
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact
            path="/"
            render={() => (
              <MyProfileContainer history={this.props.history} />
            )}
          />
          <Route path="/profiles"
            render={() => (
              <AllProfilesContainer history={this.props.history} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
