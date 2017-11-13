import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { truncate, assign } from 'lodash';
import UserCard from './UserCard.jsx';
import ButtonGroup from './ButtonGroup.jsx'

const EventCard = ({ event }) => {
  const { title, owner, attendees } = event
  // const style = {
  //   position: 'absolute',
  //   marginLeft: '250px',
  //   marginTop: '100px',
  //   marginBottom: '100px',
  //   fontFamily: 'Roboto Mono',
  // }
  const hostingStyle = {
    borderTop: 'thick solid #48c7c6'
  }
  // const activeStyle = {
  //   boxShadow: '0px 0px 10px  #48c7c6',
  // }
  const isActive = true;
  const isHost = true;
  return (
    <Card
      style={ isHost ? assign({}, {padding: '5px', minHeight: '600px'}, hostingStyle) : {padding: '5px', minHeight: '600px'}}
      // style={isActive ? assign({}, { padding: '5px', minHeight: '600px' }, activeStyle) : { padding: '5px', minHeight: '600px' }}
      raised
      fluid
    >
      <Card.Content>
        {isHost ?
          <Icon name="pencil" size="large" style={{ float: 'right', height: '25px' }} /> :
          <div style={{ height: '25px' }} />
        }
        <Image src="https://bugster.forgerock.org/jira/secure/useravatar?size=xsmall&avatarId=12840" />
        <Card.Header style={{ marginTop: '5px', marginBottom: '3px', textAlign: 'center' }} >
          {truncate(title, { length: 25 })}
        </Card.Header>
        <UserCard
          name   = {owner.firstName + owner.lastName}
          email  = {owner.email}
          image  = "https://bugs.mojang.com/secure/useravatar?size=xsmall&avatarId=18936"
          isHost = {false}
        />
        <Card.Meta style={{ marginTop: '15px' }}>
          <span>
            Quick Summary
          </span>
        </Card.Meta>
        <Card.Description>
          {truncate("Synth jianbing gastropub raw denim bushwick godard twee, thundercats VHS swag shabby chic kickstarter subway tile put a bird on it narwhal. Succulents poutine mlkshk before they sold out chicharrones. Meh pickled lyft, franzen scenester street art adaptogen blog. Lo-fi you probably haven't heard of them kickstarter photo booth synth ramps glossier. Quinoa iceland paleo keffiyeh. Seitan viral sartorial tattooed kombucha mlkshk tumeric pok pok plaid fashion axe selfies venmo ethical fixie blue bottle.", { length: 150, separator: ' ' })}
        </Card.Description>
        <div style={{ marginTop: '10px', fontSize: '15px' }}>
          <Icon name="user" />
          {attendees.length} attending
        </div>
        <div style={{ marginTop: '10px' }}>
          <ButtonGroup
            buttonOne   = "attend"
            buttonTwo   = "unattend"
            callbackOne = {() => console.log('attend event')}
            callbackTwo = {() => console.log('unattend event')}
          />
        </div>
      </Card.Content>
    </Card>
  )
}

export default EventCard
