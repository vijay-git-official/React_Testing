import { render, screen } from "@testing-library/react";
import Contact from "../../components/Contact";

describe("contact test cases", () => {


test("should Load Contact Us Component", () => {
    render(<Contact />);


    const heading = screen.getByRole("heading");


    expect(heading).toBeInTheDocument(); 
});


test("should Load button", () => {
    render(<Contact />);


    const button = screen.getByRole("button");


    expect(button).toBeInTheDocument(); 
});


test("should Submit Text Present", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument(); 
});


test("Should load 2 input boxes on the component", ()=>{
render(<Contact/>);


//Querry
const inputBoxes = screen.getAllByRole("textbox");//multiple items getAllByRo 

//assertion 
expect(inputBoxes.length).toBe(2);
})


})
