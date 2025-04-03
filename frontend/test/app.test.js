import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

// import { expect } from "vitest";

describe('Debe renderizar el componente APP', () => {
    test('renderiza el componente', async () => { 
        render(
            <App />
    );

        const text1 = await screen.findByText(/see all locations/i);
        const text2 = await screen.findByText(/Money location/i);
        const text3 = await screen.findByText(/Type of currency according to your location/i);
        const text4 = await screen.findByText(/Website to show the type of currency applicable according to your location/i);
        const text5 = await screen.findByText(/Click, here/i);

        expect(text1).toBeInTheDocument();
        expect(text2).toBeInTheDocument();
        expect(text3).toBeInTheDocument();
        expect(text4).toBeInTheDocument();
        expect(text5).toBeInTheDocument();

     })
});
