import React, {useEffect, useState} from 'react';
import CityService from "../services/CityService";
import {Col, Form} from "react-bootstrap";

function CityList() {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        let cityService = new CityService();
        cityService.getCities().then(result=>setCities(result.data.data));
    },[])

    return (
        <div>
            <Form.Group className="mb-2">
            <Form.Label className='font-weight-bold'>City</Form.Label>
            <Form.Control as="select">
                <option>Select</option>
                {
                    cities.map(city=>(
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))
                }
            </Form.Control>
            </Form.Group>
        </div>
    );
}

export default CityList;
