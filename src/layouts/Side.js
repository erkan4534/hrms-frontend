import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import CityList from "../pages/CityList";
import PositionList from "../pages/PositionList";


function Side() {
    return (
        <div>
            <Container className="mt-sm-5">
                <Row>
                    <Col sm={12}><CityList/></Col>
                </Row>
                <Row>
                    <Col sm={12}><PositionList/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Side;

