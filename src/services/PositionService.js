import React, {Component} from 'react';
import axios from "axios";

class PositionService extends Component {

    getPositions(){
        return axios.get("http://localhost:8080/api/positions/getAll");
    }
}

export default PositionService;
