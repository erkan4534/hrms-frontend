export const JOB_ADVERT_LIST="JOB_ADVERT_LIST";

export function getJobAdvertList(jobAdvert){
    return {
        type:JOB_ADVERT_LIST,
        payload:jobAdvert
    }
}
