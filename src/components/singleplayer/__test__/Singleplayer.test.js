

import { render, fireEvent, screen  } from "@testing-library/react";
import Button from "../../../button/Button";
import StartButton from "../../startbutton/StartButton";
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


    test("Should only be able to enter one player name input if Singleplayer", () => {
        //Given
               
        render(<Singleplayer start={false}/>)
        const inputFields = screen.getAllByRole("textbox")
        
        //When
        //Then
        expect(inputFields).toHaveLength(1)
    })

    test("Should display game choices if StartButton is pressed", () => {

        render(<Singleplayer start={false} setStart={() => {}}/>)

        const startButton = screen.getByRole("button",{name: "Starta"})
        fireEvent.click(startButton)

        const Btn = screen.getByRole("button", {value: "Sten"})
        expect(Btn).toBeInTheDocument()
        
    })

})