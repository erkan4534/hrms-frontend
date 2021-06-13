import React from 'react';
import {Nav,NavItem,NavLink} from "reactstrap";

function Side() {
    return (
        <div>
            <Nav vertical >
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Side;

