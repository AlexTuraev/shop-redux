import React from 'react';
import {DoorConsumer} from '../door-context';

const withDoorServices = (Wrapped) => {
    return (props) => {
        return(
            <DoorConsumer>
                {
                    (doorServices) => {
                        return <Wrapped {...props} doorServices={doorServices} />
                    }
                }
            </DoorConsumer>
        );
    }
}

export default withDoorServices;