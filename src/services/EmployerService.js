import  {Component} from 'react';
import axios from "axios";

class EmployerService extends Component {

    employerAdd(params){
        return axios.post('http://localhost:8080/api/employers/add', params);
    }

    getAllEmployers(){
        return axios.get('http://localhost:8080/api/employers/getAll');
    }

}

export default EmployerService;
