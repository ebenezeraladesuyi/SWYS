import { iSWYS } from "../types/Interface";
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