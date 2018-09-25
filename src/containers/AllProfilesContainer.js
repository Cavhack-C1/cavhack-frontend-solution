import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Joe',
    lastName: 'Somebody',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {
    const profiles = users.map(user => (
      <Col xs={6} md={4} lg={3} key={user.id}>
        <Thumbnail src="/assets/images/person-placeholder.jpg" alt="242x200">
          <h3>{user.firstName} {user.lastName}</h3>
          <p>
            <Button bsStyle="primary" onClick={() => this.props.history.push(`/?user=${user.id}`)}>View Profile</Button>
          </p>
        </Thumbnail>
      </Col>
    ))
    return (
      <Grid>
        <Row>
          {profiles}
        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer