import axios from "axios";
import { allGetData } from "../src/services/axios"

jest.mock("axios");

describe("allGetData", () => {
    test("debe retornar la lista de ubicaciones", async () => {
        const mockResponse = { data: [{ country: "USA" }, { country: "Canada" }] };

        axios.get.mockResolvedValue(mockResponse);

        const response = await allGetData();

        expect(axios.get).toHaveBeenCalledWith("https://geolocation-mfoq.onrender.com/geolocation/sendlocation");
        expect(response).toEqual(mockResponse);
    });

    test("debe lanzar un error cuando la API falla", async () => {
        axios.get.mockRejectedValue(new Error("Error de servidor"));

        await expect(allGetData()).rejects.toThrow("Error de servidor");
    });
});
