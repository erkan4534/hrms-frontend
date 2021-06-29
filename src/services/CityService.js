import  {Component} from 'react';
import axios from "axios";

class CityService extends Component {

    getCities(){
        return axios.get("http://localhost:8080/api/cities/getAll");
    }

}

export default CityService;
