import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Navi from "./Navi";
import Side from "./Side";
import JobAdvertList from "../pages/JobAdvertList";

function Dashboard() {
    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col  sm={2}><Side/></Col>
                    <Col  sm={10} >
                        <JobAdvertList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
