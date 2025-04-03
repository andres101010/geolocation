import { getData } from "../src/services/axios";
import axios from "axios";

jest.mock('axios')

describe('Debe traer la informacion de la moneda', () => {
        test("debe retornar datos cuando la API responde correctamente", async () => {
            const mockResponse = { data: { country: "USA", city: "New York" } };
    
            axios.get.mockResolvedValue(mockResponse); // Simulamos respuesta de la API
    
            const ip = "192.168.1.1";
            const response = await getData(ip);
    
            expect(axios.get).toHaveBeenCalledWith(`https://geolocation-mfoq.onrender.com/geolocation/location/${ip}`);
            expect(response).toEqual(mockResponse);
        });
    
        test("debe lanzar un error cuando la API falla", async () => {
            axios.get.mockRejectedValue(new Error("Error de red"));
    
            await expect(getData("192.168.1.1")).rejects.toThrow("Error de red");
        });
    
     })

