import {jobAdvertItems} from "../initialValues/JobAdvertItems";
import {JOB_ADVERT_LIST} from "../actions/JobAdvertActions";

const initialState = {
    jobAdvertItems: jobAdvertItems
}

export default function jobAdvertReducer(state = initialState, {type, payload}) {

    switch (type) {
        case JOB_ADVERT_LIST:
          alert("calisti");
        default:
            return state;
    }


}
