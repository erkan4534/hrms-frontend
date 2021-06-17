import React, {useState, useEffect} from 'react'
import JobAdvertService from "../services/JobAdvertService";
import {Table} from "reactstrap";
import {Container} from "react-bootstrap";

function JobAdvertList(props) {

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data));
    }, [])

    return (
        <div>
            <Container>
                <Table striped bordered hover size="sm" >
                    <thead>
                    <tr>
                        <th>Firm Name</th>
                        <th>Position Name</th>
                        <th>Open Positions Number</th>
                        <th>Create Date</th>
                        <th>Apply Deadline</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        jobAdverts.map(jobAdvert => (
                            <tr key={jobAdvert.firmName}>
                                <td>{jobAdvert.firmName}</td>
                                <td>{jobAdvert.positionName}</td>
                                <td>{jobAdvert.openPositionsNumber}</td>
                                <td>{jobAdvert.createDate}</td>
                                <td>{jobAdvert.applyDeadline}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default JobAdvertList;
