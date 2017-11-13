import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { times } from 'lodash'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { Grid } from 'semantic-ui-react';
// import UserCard from '../src/UserCard.jsx';
import EventCard from '../src/EventCard.jsx';
// import user from '../mocks/user.json';
// import event from '../mocks/event.json';


const user = 
  {
    "_id": "5878befc5f94d3001c1469c3",
    "firstName": "Daniel",
    "lastName": "Kijkov",
    "email": "dankijkov@gmail.com",
    "__v": 0,
    "id": "5878befc5f94d3001c1469c3"
  }
const event = {
  "_id": "5878c5145f94d3001c1469c5",
  "updatedAt": "2017-01-29T09:44:31.131Z",
  "createdAt": "2017-01-13T12:16:20.671Z",
  "startsAt": "2017-01-30T11:15:33.000Z",
  "title": "Mexican Night Party vol. 2",
  "description": "Party in Scrollbar",
  "capacity": 50,
  "owner": {
    "_id": "5878befc5f94d3001c1469c3",
    "firstName": "Daniel",
    "lastName": "Kijkov",
    "email": "dankijkov@gmail.com",
    "__v": 0,
    "id": "5878befc5f94d3001c1469c3"
  },
  "__v": 97,
  "attendees": [
    {
      "_id": "5878befc5f94d3001c1469c3",
      "firstName": "Daniel",
      "lastName": "Kijkov",
      "email": "dankijkov@gmail.com",
      "__v": 0,
      "id": "5878befc5f94d3001c1469c3"
    },
    {
      "_id": "5878c66f5f94d3001c1469c8",
      "firstName": "Just",
      "lastName": "Thor",
      "email": "thor@strv.com",
      "__v": 0,
      "id": "5878c66f5f94d3001c1469c8"
    },
    {
      "_id": "5878c71f5f94d3001c1469ca",
      "firstName": "Peter",
      "lastName": "Parker",
      "email": "peterparker@strv.com",
      "__v": 0,
      "id": "5878c71f5f94d3001c1469ca"
    },
    {
      "_id": "5878c7986cd5a70022992ce2",
      "firstName": "Bucky",
      "lastName": "Barnes",
      "email": "buckybarnes@strv.com",
      "__v": 0,
      "id": "5878c7986cd5a70022992ce2"
    },
    {
      "_id": "5884eb0d3d76ea0022304474",
      "firstName": "Adam",
      "lastName": "V",
      "email": "adam.vresky+test12345@strv.com",
      "__v": 0,
      "id": "5884eb0d3d76ea0022304474"
    }
  ],
  "id": "5878c5145f94d3001c1469c5"
}

class App extends Component {
  componentDidMount() {
    console.log('app mounted')
  }
  render() {
    const {name, email, image} = user
    const events = times(40, i => {
        return (
            <Grid.Column width={4}>
                <EventCard event={event} />
            </Grid.Column>
        )
    })
    return (
        <Grid style={{padding: '20px'}}>
            {events}
        </Grid>
    )
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
