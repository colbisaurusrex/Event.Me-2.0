import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card, Icon, Image } from 'semantic-ui-react'
import event from '../mocks/event.json'

const {owner, description, attendees} = event
const style = {
  position: 'absolute',
  marginLeft: '250px',
  marginTop: '100px',
  marginBottom: '100px',
  fontFamily: 'Roboto Mono',
}

storiesOf('Event', module)
  .add('Event Card', () => {
    return (
      <div style={style}>
        <Card style={{padding: '5px'}}>
          <Card.Content>
            <Image src='https://bugster.forgerock.org/jira/secure/useravatar?size=xsmall&avatarId=12840' />
            <Card.Header style={{textAlign: 'center', marginTop: '15px'}}>
              Host: {owner.firstName + ' ' + owner.lastName}
            </Card.Header>
            <Card.Meta style={{textAlign: 'center'}}>
              <span>
                Email: {owner.email}
              </span>
            </Card.Meta>
            <Card.Description>
              Synth jianbing gastropub raw denim bushwick godard twee, thundercats VHS swag shabby chic kickstarter subway tile put a bird on it narwhal. Succulents poutine mlkshk before they sold out chicharrones. Meh pickled lyft, franzen scenester street art adaptogen blog. Lo-fi you probably haven't heard of them kickstarter photo booth synth ramps glossier. Quinoa iceland paleo keffiyeh. Seitan viral sartorial tattooed kombucha mlkshk tumeric pok pok plaid fashion axe selfies venmo ethical fixie blue bottle. 
            </Card.Description>
              <div style={{marginTop: '10px', fontSize: '15px'}}>
                <Icon name='user' />
                {attendees.length} attending
              </div>
          </Card.Content>
        </Card>
      </div>
    )
  })
