
import Multiplayer from "../Multiplayer";
import { render, fireEvent, screen  } from "@testing-library/react";


describe("multiplayer", () => {
    test ("Should render two input fields", () => {

        const testInput1 = "testInput1";
        const testInput2 ="testInput2";

        render(<Multiplayer start={false}/>)
        const inputField1 = screen.getByPlaceholderText(/Enter player 1../i)
        const inputField2 = screen.getByPlaceholderText(/Enter player 2../i)

        fireEvent.click(inputField1)
        fireEvent.change(inputField1, {target: {value: testInput1}})
        fireEvent.click(inputField2)
        fireEvent.change(inputField2, {target: {value: testInput2}})
        
        expect(inputField1).toHaveValue(testInput1)
        expect(inputField2).toHaveValue(testInput2)


    })
})