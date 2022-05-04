import httpClient from "./Http_Common";

import axios from "axios";


const getAll = () => {
    return httpClient.get('Receptionist/Receptionist/reservation/getallreservation');
}


const create = data => {
    return httpClient.post("/admin/adddrugs", data);
}

const get = id => {
    return httpClient.get(`/admin/editdrugs/${id}`);
}

const update = data => {
    return httpClient.put('/edit', data);
}

const remove = id => {
    return httpClient.delete(`/admin/deletedrug/${id}`);
}
export default { getAll, create, get, update, remove };