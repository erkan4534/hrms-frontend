import React from 'react';
import {Col, Row} from "react-bootstrap";
import Side from "./Side";
import JobAdvertList from "../pages/JobAdvertList";
import {Route,Switch} from "react-router-dom";

function Dashboard() {
    return (
        <div>
                <Row >
                    <Col  sm={2} ><Side/></Col>
                    <Col  sm={10}>
                        <Route exact path="/" component={JobAdvertList}/>
                        <Route exact path="/adverts" component={JobAdvertList}/>
                    </Col>
                </Row>

        </div>
    );
}

export default Dashboard;
