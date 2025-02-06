import axios from "axios";

export const getData = async (ip) => {
    try {
        const res = await axios.get(`https://geolocation-mfoq.onrender.com/geolocation/location/${ip}`)
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