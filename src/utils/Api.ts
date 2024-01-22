import { iSWYS, iSubscribe } from "../types/Interface";
import axios from "axios";

export const url = "https://mfmyc-ado.onrender.com"
 

// register attendee
export const registerAttendee = async (data : iSWYS) => {
    return await axios.post(`${url}/swys/registerattendee`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}


// subscribe for newletter
export const userSubscribe = async (data : iSubscribe) => {
    return await axios.post(`${url}/subscribe/usersubscribe`, data)
    .then((res) => {
        return res.data
    })
    .catch((err)=> {
        return err
    })
}