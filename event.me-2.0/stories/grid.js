import React from 'react';
import { times } from 'lodash'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { Grid } from 'semantic-ui-react';
import UserCard from '../src/UserCard.jsx';
import EventCard from '../src/EventCard.jsx';
import user from '../mocks/user.json';
import event from '../mocks/event.json';

storiesOf('Event', module)
.addDecorator(withKnobs)
.add('Grid', () => {
    const {name, email, image} = user
    const events = times(40, i => {
        return (
            <Grid.Column width={5}>
                <EventCard event={event} />
            </Grid.Column>
        )
    })
    return (
        <Grid style={{padding: '20px'}}>
            {events}
        </Grid>
    )
})