import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CityList from "../pages/CityList";


function Side() {
    return (
        <div>
            <Container className="mt-sm-5">
                <Row>
                   <CityList/>
                </Row>
            </Container>

        </div>
    );
}

export default Side;

