import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div>
            <Container fluid>
                <Navi/>
            </Container>

            <Container className="mt-2">
                <Dashboard/>
            </Container>
        </div>
    );
}

export default App;
