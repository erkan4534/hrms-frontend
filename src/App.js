import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import React from "react";
import {Container} from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';

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
