import React from 'react';
import {Button, Nav, NavDropdown} from "react-bootstrap";

function SignedIn({signOut}) {
    return (
        <div>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" drop="down">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={signOut}>Logout</NavDropdown.Item>
            </NavDropdown>
        </div>
    );
}

export default SignedIn;
