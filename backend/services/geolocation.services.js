const dbConnection = require("../dataBase/connection");
const axios = require("axios");

class Geolocation {
  async location(ip) {
    try {
      console.log("ip", ip);
      // Obtener la información de geolocalización
      const geoResponse = await axios.get(`https://api.vatcomply.com/geolocate?ip=${ip}`);
      // console.log("geoResponse", geoResponse.data);
      const countryInfo = geoResponse.data;

      const geoResponse2 = await axios.get(`https://ipapi.co/${ip}/json/`);
      console.log("geoResponse2", geoResponse2.data);

      const geoResponse3 = await axios.get(`https://ipwhois.app/json/${ip}`);
      console.log("geoResponse3", geoResponse3.data);


      // Obtener información de las monedas
      const currenciesResponse = await axios.get('https://api.vatcomply.com/currencies');
      // console.log("currenciesResponse", currenciesResponse.data);
      const currencies = currenciesResponse.data;
      const countryCode = countryInfo.countryCode;

      if (currencies.hasOwnProperty(countryCode)) {
        // Moneda aplicable encontrada en la API de monedas
        const currency = currencies[countryCode];
        const visitData = {
          pais: countryCode,
          moneda: applicableCurrency.name,
          fecha: new Date(),
        };

        
        await this.saveVisit(visitData);
         // Agregar la fecha al objeto applicableCurrency
        currency.fecha = new Date();
        return { currency };
      } else {
        // Moneda no encontrada en la API de monedas
        const currency = {
          name: countryInfo.name,
          symbol: countryInfo.currency,
          fecha: new Date()
        };

        const visitData = {
          pais: countryInfo.name,
          moneda: countryInfo.currency || defaultCurrency.name,
          fecha: new Date(),
        };

        // Guardar la visita en la base de datos
        await this.saveVisit(visitData);

        return { currency };
      }
    } catch (error) {
      throw Error(error);
    }
  }

  async saveVisit(visitData) {
    return new Promise((resolve, reject) => {
      dbConnection.connection.query('INSERT INTO visitas SET ?', visitData, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async sendLocation(){
    try {
      const sendData = await new Promise((resolve, reject) => {
        dbConnection.connection.query('SELECT * FROM visitas', (error,result)=>{
          if(!error){
            resolve({data: result});
            }else{
              reject(error);
              }
        })
      })
      return {sendData}
    } catch (error) {
      throw Error(error)
    }
  }
}

module.exports = Geolocation;
