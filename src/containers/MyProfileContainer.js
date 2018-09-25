import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddSubmit = this.handleAddSubmit.bind(this)
  }

  componentDidMount() {
    const userId = new URLSearchParams(this.props.location.search).get('user')
    if(userId) {
      console.log('other user profile')
      console.log(getUserProfile(userId))

    } else {
      console.log('my profile')
    }
  }

  handleModalOpen(type) {
    this.setState({
      showModal: true,
      type
    })
  }

  handleModalClose() {
    this.setState({
      showModal: false,
      type: ''
    })
  }

  handleTextChange(e) {
    this.setState({
      addValue: e.target.value
    })
  }

  handleAddSubmit() {
    console.log(this.state.addValue)
    this.setState({
      addValue: '',
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
          </Row>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              <Image src="/assets/images/dog-placeholder.jpg" thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              <PageHeader>John Doe
                <br />
                <small>About Me</small>
              </PageHeader>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis eget dui quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam lectus ex, consectetur ut risus sit amet, sodales feugiat eros. Cras sed lorem varius ligula porttitor dictum vitae commodo justo.</p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <PageHeader>
                My Interests
              </PageHeader>
              <Panel>
                <Panel.Body>
                  <ul>
                    <li>movies</li>
                    <li>reading</li>
                    <li>coding</li>
                  </ul>
                  <Button bsStyle="link" onClick={() => this.handleModalOpen('Interest')}>Add</Button>
                </Panel.Body>
              </Panel>
              <PageHeader>
                Skills
              </PageHeader>
              <Panel>
                <Panel.Body>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javacript</li>
                  </ul>
                  <Button bsStyle="link" onClick={() => this.handleModalOpen('Skill')}>Add</Button>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
        <AddModal 
          showModal={this.state.showModal} 
          handleModalClose={this.handleModalClose} 
          type={this.state.type}
          value={this.state.addValue}
          handleChange={this.handleTextChange}
          submit={this.handleAddSubmit}
        />
      </div>
    )
  }
}

export default withRouter(MyProfileContainer)