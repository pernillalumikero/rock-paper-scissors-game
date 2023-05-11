import { render, fireEvent, screen  } from "@testing-library/react";
import GameMode from "../GameMode"

describe("GameMode", () => {

    test("Should render radiobuttons" , () => {

        render(<GameMode />)

        const header = screen.getByRole("heading", {level:3})

        expect(header).toHaveTextContent("Välj antal spelare")

    })
    test("Should remove GameMode component when clicking Singleplayer radio button" , () => {

        // const gameMode    = "";
        // const setGameMode = gameMode;

        // render(<GameMode setGameMode={setGameMode}/>)
        // const radioBtn = screen.getAllByRole("radio", {id: "single"})
        // fireEvent.click(radioBtn[0])

        // const onScreen = 

        // expect(gameMode).toHaveValue("Singleplayer")

        render(<GameMode setGameMode={() => {}} />)
        const radioBtn = screen.getAllByRole("radio", {id: "single"})
        fireEvent.click(radioBtn[0])

        expect(radioBtn).not.toBeInTheDocument

    })
    test("Should remove GameMode component when clicking Multiplayer radio button" , () => {

        render(<GameMode setGameMode={() => {}} />)
        const radioBtn = screen.getAllByRole("radio", {id: "multi"})
        fireEvent.click(radioBtn[0])

        expect(radioBtn).not.toBeInTheDocument

    })

    // test("Should display Singleplayer" , () => {

    //     const gameMode    = "";
    //     const setGameMode = gameMode;

    //     render(<GameMode setGameMode={()=>{}} />)
    //     const radioBtn = screen.getAllByRole("radio", {id: "single"})
    //     fireEvent.click(radioBtn[0])

    

    //     expect(setGameMode).tohave("Singleplayer")


    // })
})