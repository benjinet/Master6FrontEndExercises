import * as React from 'react';
import { MembersTableComponent } from './components';

export const App = () => {
    const [name, setName] = React.useState("lemoncode");

    const setUsernameState = () => {
        setName(name);
    };

    return <>
        < MembersTableComponent initialOrganization={name} onOrganizationUpdated={setUsernameState} />
    </>
};
