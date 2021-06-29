import React from 'react';
import {Col, Row} from "react-bootstrap";
import Side from "./Side";
import JobAdvertList from "../pages/JobAdvertList";
import {Route} from "react-router-dom";
import JobAdvert from "../pages/JobAdvert";
import Employer from "../pages/Employer";
import {ToastContainer} from "react-toastify";

function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
                <Row >
                    <Col  sm={2} ><Side/></Col>
                    <Col  sm={10}>
                        <Route exact path="/" component={JobAdvertList}/>
                        <Route exact path="/advertsList" component={JobAdvertList}/>
                        <Route exact path="/advert" component={JobAdvert}/>
                        <Route exact path="/employer" component={Employer}/>
                    </Col>
                </Row>
        </div>
    );
}

export default Dashboard;
