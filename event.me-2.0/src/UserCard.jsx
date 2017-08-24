import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
import ButtonGroup from './ButtonGroup.jsx'

const UserCard = ({name, email, image, isHost}) => {
    return (
        <Card raised={true} style={{cursor: 'pointer', paddingBottom: '20px'}}>
            <Card.Content>
                <Image floated='right' size='mini' src={image}/>
                <Card.Header style={{marginBottom: '3px'}}>
                    {name}
                </Card.Header>
                <Card.Meta style={{fontSize: '10px'}}>
                    {email}
                </Card.Meta>
                {isHost && 
                    <Divider>
                        <ButtonGroup 
                            buttonOne={'edit'}
                            buttonTwo={'delete'}
                            callbackOne={() => console.log('edit event')}
                            callBackTwo={() => console.log('delete event')}
                        />
                    </Divider>
                }
            </Card.Content>
        </Card>
    )
}

export default UserCard
