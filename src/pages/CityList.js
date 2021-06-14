import React, {useEffect, useState} from 'react';
import CityService from "../services/CityService";
import {Form} from "react-bootstrap";

function CityList(props) {

    const [cities, setCities] = useState([]);

    useEffect(()=>{
        let cityService = new CityService();
        cityService.getCities().then(result=>setCities(result.data.data));
    },[])

    return (
        <div>
            <Form.Control as="select">
                <option>City is Selected</option>
                {
                    cities.map(city=>(
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))
                }
            </Form.Control>
        </div>
    );
}

export default CityList;
