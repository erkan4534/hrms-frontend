import React from 'react';
import {Button, Nav} from "react-bootstrap";

function SignedOut({signIn}) {
    return (
        <div>
            <Nav.Item>
                <Button  primary className="mr-2" onClick={signIn}  >Login</Button>
                <Button  primary>Sign in</Button>
            </Nav.Item>
        </div>
    );
}

export default SignedOut;
