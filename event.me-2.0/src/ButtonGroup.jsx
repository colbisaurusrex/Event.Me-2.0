import React from 'react';
import { Card, Icon, Image, Divider, Button } from 'semantic-ui-react'
// NOTE: How can I use spread operator here?
const ButtonGroup = ({buttonOne, buttonTwo, callbackOne, callBackTwo}) => {
    return(
        <div className='ui two buttons'>
            <Button basic color='green' onClick={() => callbackOne()}>{buttonOne}</Button>
            <Button basic color='red' onClick={() => callbackTwo()}>{buttonTwo}</Button>
        </div>
    )
}

export default ButtonGroup
