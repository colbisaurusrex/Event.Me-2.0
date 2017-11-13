import React from 'react';
import { truncate, assign } from 'lodash'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import UserCard from '../src/UserCard.jsx'
import ButtonGroup from '../src/ButtonGroup.jsx'
import event from '../mocks/event.json'

const {title, owner, description, attendees} = event
const style = {
  position    : 'absolute',
  marginLeft  : '250px',
  marginTop   : '100px',
  marginBottom: '100px',
  fontFamily  : 'Roboto Mono',
}
const hostingStyle = {
  borderTop: 'thick solid #48c7c6'
}
const activeStyle = {
  boxShadow: '0px 0px 10px  #48c7c6',
}
// NOTE: Different sections of the event card need to be their own components
storiesOf('Event', module)
  .addDecorator(withKnobs)
  .add('Event Card', () => {
    const isHost   = boolean('Is host?', false)
    const isActive = boolean('Card is active?', false)
    return (
      <div style={style}>
          <div>Note: Event Cards should be of fixed height</div>
          <Card 
            // style={ isHost ? assign({}, {padding: '5px', minHeight: '600px'}, hostingStyle) : {padding: '5px', minHeight: '600px'}}
            style  = { isActive ? assign({}, {padding: '5px', minHeight: '600px'}, activeStyle) : {padding: '5px', minHeight: '600px'}}
            raised = {true}
          >
            <Card.Content>
              {isHost ? <Icon name="pencil" size="large" style={{float: 'right', height: '25px'}}/> : <div style={{height: '25px'}}></div>}
              <Image src='https://bugster.forgerock.org/jira/secure/useravatar?size=xsmall&avatarId=12840' />
              <Card.Header style={{marginTop: '5px', marginBottom: '3px', textAlign: 'center'}}>
                  {text('user', `${truncate(title, {'length': 25})}`)}
              </Card.Header>
               <UserCard 
                  name   = {text('Name', `${owner.firstName + ' ' + owner.lastName}`)}
                  email  = {text('Email', `${owner.email}`)}
                  image  = 'https://bugs.mojang.com/secure/useravatar?size=xsmall&avatarId=18936'
                  isHost = {boolean('Is host?', false)}
                />
              <Card.Meta style={{marginTop: '15px'}}>
                <span>
                  Quick Summary
                </span>
              </Card.Meta>
              <Card.Description>
                {text('Event Description', `${truncate("Synth jianbing gastropub raw denim bushwick godard twee, thundercats VHS swag shabby chic kickstarter subway tile put a bird on it narwhal. Succulents poutine mlkshk before they sold out chicharrones. Meh pickled lyft, franzen scenester street art adaptogen blog. Lo-fi you probably haven't heard of them kickstarter photo booth synth ramps glossier. Quinoa iceland paleo keffiyeh. Seitan viral sartorial tattooed kombucha mlkshk tumeric pok pok plaid fashion axe selfies venmo ethical fixie blue bottle.", {'length': 150, 'separator': ' '})}`)}
              </Card.Description>
              <div style={{marginTop: '10px', fontSize: '15px'}}>
                <Icon name='user' />
                {number('Attendees', `${attendees.length}`)} attending
              </div>
              <div style={{marginTop: '10px'}}>
                <ButtonGroup 
                  buttonOne   = {'attend'}
                  buttonTwo   = {'unattend'}
                  callbackOne = {() => console.log('attend event')}
                  callBackTwo = {() => console.log('unattend event')}
                />
              </div>
            </Card.Content>
          </Card>
      </div>
    )
  })
  .add('Event Summary Card', () => {
    const isHost   = boolean('Is host?', false)
    const isActive = boolean('Card is active?', false)
    return(
      <div style={style}>
        <div>Note: Should these mini cards display the whole name or truncate?</div>
        <Card style={isActive ? activeStyle : null}>
          <Card.Content>
              <Image floated='right' size='mini' src='https://bugster.forgerock.org/jira/secure/useravatar?size=xsmall&avatarId=12840'/>
              <Card.Header style={{marginBottom: '3px'}}>
                  {text('user', `${truncate(title, {'length': 25})}`)}
              </Card.Header>
              <div style={{marginTop: '10px', fontSize: '15px'}}>
                <Icon name='user' />
                {number('Attendees', `${attendees.length}`)} attending
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  })
