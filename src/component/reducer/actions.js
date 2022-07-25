import { FETCH_JOB, SET_JOB, ADD_JOB, DEL_JOB,EDIT_JOB, FIL_JOB, CHECK_JOB } from './constants';

const fetchJob = payload => ({
    type: FETCH_JOB,
    payload
})
const setJob = payload => ({
    type: SET_JOB,
    payload
})

const editJob = ({id, input}) => ({
    type: EDIT_JOB,
    id,
    input
})

const addJob = payload => ({
    type: ADD_JOB,
    payload
})
const delJob = payload => ({
    type: DEL_JOB,
    payload
})
const checkJob = payload => ({
    type: CHECK_JOB,
    payload
})
const filJob = payload => ({
    type: FIL_JOB,
    payload
})

export { fetchJob, setJob, addJob, delJob, editJob, filJob, checkJob };
