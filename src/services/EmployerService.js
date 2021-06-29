import  {Component} from 'react';
import axios from "axios";

class EmployerService extends Component {

    employerAdd(params){
        return axios.post('http://localhost:8080/api/employers/add', params);
    }

}

export default EmployerService;
