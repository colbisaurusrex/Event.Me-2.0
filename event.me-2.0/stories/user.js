import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import user from '../mocks/user.json'

const style = {
    position: 'absolute',
    marginLeft: '250px',
    marginTop: '100px',
    marginBottom: '100px',
    fontFamily: 'Roboto Mono',
}

storiesOf('User', module)
    .addDecorator(withKnobs)
    .add('User Card', () => {
        return (
            <div style={style}>
                <div style={{width: '300px'}}>
                    Note: these are intended to be used both on the Event Card and in a modal displayed when the user clicks on attendees
                </div>
                <Card>
                    <Card.Content>
                        <Image floated='right' size='mini' src='https://bugs.mojang.com/secure/useravatar?size=xsmall&avatarId=18936'/>
                        <Card.Header style={{marginBottom: '3px'}}>
                            {text('user', `${user.firstName + ' ' + user.lastName}`)}
                        </Card.Header>
                        <Card.Meta>
                            {text('Email', `${user.email}`)}
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </div>
        )
    })