import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Side from "./Side";
import JobAdvertList from "../pages/JobAdvertList";

function Dashboard() {
    return (
        <div>

                <Row >
                    <Col  sm={2} ><Side/></Col>
                    <Col  sm={10}>
                        <JobAdvertList/>
                    </Col>
                </Row>

        </div>
    );
}

export default Dashboard;
