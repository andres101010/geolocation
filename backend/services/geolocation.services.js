const dbConnection = require("../dataBase/connection");
const axios = require("axios");

class Geolocation {
  async location() {
    try {
      //  Obtener el código del país
      const geoResponse = await axios.get('https://api.vatcomply.com/geolocate');
      const countryCode = geoResponse.data.countryCode;

      //  Obtener información de las monedas
      const currenciesResponse = await axios.get('https://api.vatcomply.com/currencies');
      const currencies = currenciesResponse.data;

      if (currencies.hasOwnProperty(countryCode)) {
        //  Moneda aplicable encontrada en la API de monedas
        const applicableCurrency = currencies[countryCode];
        const visitData = {
          pais: countryCode,
          moneda: applicableCurrency.name,
          fecha: new Date(),
        };

        //  Guardar la visita en la base de datos
        const insertResult = await new Promise((resolve, reject) => {
          dbConnection.connection.query('INSERT INTO visitas SET ?', visitData, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });

        // Cierra la conexión a la base de datos
        dbConnection.connection.end();

        return { applicableCurrency, defaultCurrency: null };
      } else {
        //  Moneda no encontrada en la API de monedas
        // Completar la información de la moneda con datos de la API de geolocalización
        const geoData = await axios.get('https://api.vatcomply.com/geolocate');
        const countryInfo = geoData.data;
        console.log(countryInfo)
        // Guardar la visita en la base de datos con la información de geolocalización
        const defaultCurrency = {
          name: countryInfo.name,
          symbol: countryInfo.currency,
        };

        const visitData = {
          pais: countryInfo.name,
          moneda: countryInfo.currency || defaultCurrency.name,
          fecha: new Date(),
        };

        const insertResult = await new Promise((resolve, reject) => {
          dbConnection.connection.query('INSERT INTO visitas SET ?', visitData, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });

        // Cierra la conexión a la base de datos
        dbConnection.connection.end();

        return { applicableCurrency: null, defaultCurrency };
      }
    } catch (error) {
      throw Error(error);
    }
  }
}
module.exports = Geolocation