import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Correct import
import Header from "../../components/Header";

test("Should render Header Component With Login Button", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    // Assuming your button has the text "Login"
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});


test("Should render Header Component With Contact", () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    // Assuming your button has the text "Login"
    const contactText = screen.getByText("Contact 0");
    expect(contactText).toBeInTheDocument();
});


