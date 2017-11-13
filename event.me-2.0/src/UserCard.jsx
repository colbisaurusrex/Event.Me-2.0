import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import { truncate} from 'lodash'
import ButtonGroup from './ButtonGroup.jsx'

const UserCard = ({name, email, image, isHost}) => {
    // NOTE: to reduce prop proliferation, pass user object and deconstruct in component
    return (
        <Card raised fluid style={{cursor: 'pointer', overflow: 'hidden'}}>
            <Card.Content>
                <Image floated='right' size='mini' src={image}/>
                <Card.Header style={{marginBottom: '3px'}}>
                    {truncate(name, {'length': 25})}
                </Card.Header>
                <Card.Meta style={{fontSize: '10px'}}>
                    {truncate(email, {'length': 25})}
                </Card.Meta>
                {/* {isHost && 
                    <Divider>
                        <ButtonGroup 
                            buttonOne={'edit'}
                            buttonTwo={'delete'}
                            callbackOne={() => console.log('edit event')}
                            callBackTwo={() => console.log('delete event')}
                        />
                    </Divider>
                } */}
            </Card.Content>
        </Card>
    )
}

export default UserCard
