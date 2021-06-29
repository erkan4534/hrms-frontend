import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {useHistory} from 'react-router';
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const history = useHistory();

    function handleSignOut(){
        setIsAuthenticated(false);
        history.push("/");
    }

    function handleSignIn(){
        setIsAuthenticated(true);
    }


    return (
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Hrms</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Nav className="mr-auto">
                        {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
                    </Nav>
                </Navbar>
        </div>
    );
}
