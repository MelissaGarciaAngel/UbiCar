import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { CardContainer } from "../styles/CategoriesStyles";



afterEach(cleanup);

describe('Card', () => {
    test('renders appropriately', () => {
        render(<CardContainer></CardContainer>);
        const cat = screen.findAllByTestId("card");
        expect(cat).toBeInTheDocument();
    })
})






