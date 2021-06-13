import React, {Component} from 'react';
import axios from "axios";

class JobAdvertService extends Component {

    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdverts/getAllActivePositionJob");
    }

}

export default JobAdvertService;
