import axios from "axios";

export const getData = async () => {
    try {
        const res = await axios.get('http://localhost:3000/geolocation/location')
        return res
    } catch (error) {
        throw Error(error)
    }
}
export const allGetData = async () => {
    try {
        const res = await axios.get('http://localhost:3000/geolocation/sendlocation')
        return res
    } catch (error) {
        throw Error(error)
    }
}