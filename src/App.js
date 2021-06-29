import Navi from "./layouts/Navi";
import React from "react";
import {Container} from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./layouts/Dashboard";

function App() {
    return (
        <div>
           {/* <Container fluid>
                <Navi/>
            </Container>*/}

            <Dashboard/>

        </div>
    );
}

export default App;
