import React, {useState,useEffect} from 'react'
import JobAdvertService from "../services/JobAdvertService";
import {Table} from "reactstrap";

function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data));
    })

    return (
        <div>
            <Table striped bordered hover size="sm" className="mt-sm-5">
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
                        <tr>
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
        </div>
    );
}

export default JobAdvertList;
