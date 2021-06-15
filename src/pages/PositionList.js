import React, {useEffect, useState} from 'react';
import PositionService from "../services/PositionService";
import {Form} from "react-bootstrap";

function PositionList() {

    const [positions, setPositions] = useState([]);

    useEffect(()=>{
        let positionService = new PositionService();
        positionService.getPositions().then(result=>setPositions(result.data.data));
    },[])

    return (
        <div>
            <Form.Control as="select">
                <option>Position is Selected</option>
                {
                    positions.map(position=>(
                        <option key={position.id} value={position.id}>{position.name}</option>
                    ))
                }
            </Form.Control>
        </div>
    );
}

export default PositionList;
