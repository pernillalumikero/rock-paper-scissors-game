

import { render, fireEvent, screen  } from "@testing-library/react";
import Singleplayer from "../Singleplayer";

describe("Singleplayer", () => {
    test("Should render input field" , () => {

        const testInput = "testInput";

        render(<Singleplayer start={false}/>)
        const inputField = screen.getByPlaceholderText(/Enter name../i)
        fireEvent.click(inputField)
        fireEvent.change(inputField, {target: {value: testInput}})

        // Then
        expect(inputField).toHaveValue(testInput)


    })
})