import  {Component} from 'react';
import axios from "axios";


class EmployerService extends Component {

    addEmployer(params){
        return axios.post('http://localhost:8080/api/employers/add', params);
    }

    getEmployerList(params){
        return axios.get('http://localhost:8080/api/employers/getAll',{params});
    }

    editEmployer(params){
        return axios.put( `http://localhost:8080/api/employers/edit/${params.id}`, params);
    }
}

export default EmployerService;
