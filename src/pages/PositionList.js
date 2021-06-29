import React, {useEffect, useState} from 'react';
import PositionService from "../services/PositionService";
import {Form} from "react-bootstrap";

function PositionList() {

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let positionService = new PositionService();
        positionService.getPositions().then(result => setPositions(result.data.data));
    }, [])

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label className='font-weight-bold'>Position</Form.Label>
                <Form.Control as="select">
                    <option>Select</option>
                    {
                        positions.map(position => (
                            <option key={position.id} value={position.id}>{position.name}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
        </div>
    );
}

export default PositionList;
