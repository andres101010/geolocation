import axios from "axios";

export const getData = async () => {
    try {
        const res = await axios.get('https://geolocation-mfoq.onrender.com/geolocation/location')
        return res
    } catch (error) {
        throw Error(error)
    }
}
export const allGetData = async () => {
    try {
        const res = await axios.get('https://geolocation-mfoq.onrender.com/geolocation/sendlocation')
        return res
    } catch (error) {
        throw Error(error)
    }
}