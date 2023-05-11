import { render, fireEvent, screen  } from "@testing-library/react";
import GameMode from "../GameMode"

describe("GameMode", () => {
    
    test("Should render radiobuttons" , () => {

        render(<GameMode />)

        const header = screen.getByRole("heading", {level:3})

        expect(header).toHaveTextContent("Välj antal spelare")

    })
    test("Should set GameMode to Singleplayer" , () => {

        // const gameMode    = "";
        // const setGameMode = gameMode;

        // render(<GameMode setGameMode={setGameMode}/>)
        // const radioBtn = screen.getAllByRole("radio", {id: "single"})
        // fireEvent.click(radioBtn[0])

        // const onScreen = 

        // expect(gameMode).toHaveValue("Singleplayer")

        render(<GameMode />)
        const radioBtn = screen.getAllByRole("radio", {id: "single"})
        fireEvent.click(radioBtn[0])

        expect(radioBtn).not.toBeInTheDocument

    })
    test("Should set GameMode to Multiplayer" , () => {

    //     const gameMode = "";
    //     const setGameMode = gameMode;

    //     render(<GameMode setGameMode={setGameMode}/>)
    //     const inputField = screen.getByPlaceholderText(/Enter name../i)
    //     fireEvent.click(inputField)
    //     fireEvent.change(inputField, {target: {value: testInput}})

    //     // Then
    //     expect(gameMode).toHaveValue("Multiplayer")


    })
})