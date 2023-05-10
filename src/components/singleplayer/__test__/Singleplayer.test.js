

import { fireEvent, render } from "@testing-library/react/types";
import Singleplayer from "../Singleplayer";

descripe("Singleplayer", () => {
    test("Should render input field" , () => {

        const testName = "testName";

        render (<Singleplayer/>)
        const inputField = screen.getByPlaceholderText("Enter name..")
        fireEvent.change(inputField, {target: {value: testName}})

        const button = screen.getByRole("button", {name: "Starta"})
        fireEvent.click(button)

        const comment = screen.getByText(testName)
        expect (comment).toBeInTheDocument()


    })
})