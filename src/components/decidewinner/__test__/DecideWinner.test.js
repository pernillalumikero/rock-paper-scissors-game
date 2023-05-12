import { render, screen } from "@testing-library/react"
import DecideWinner from "../DecideWinner"

describe("DecideWinner", () => {

    test.each([
        //Given
        ["Sax", "Påse", "Spelare1 vann!"],
        ["Påse", "Sten", "Spelare1 vann!"],
        ["Sten", "Sax", "Spelare1 vann!"]
    ])("Should display that player1 won", (player1Choice, player2Choice, expected) => {
        //When
        const player1 = {
            name: "Spelare1",
            choice: player1Choice,
            isWinner: true
        }

        const player2 = {
            name: "Spelare2",
            choice: player2Choice,
            isWinner: false
        }

        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() => { }} setPlayer2={() => { }} history={[]} setHistory={() => { }} />)
        const result = screen.getByRole("heading", { level: 2 })
        //Then
        expect(result).toHaveTextContent(expected)
    })

    test.each([
        //Given
        ["Sax", "Påse", "Spelare2 vann!"],
        ["Påse", "Sten", "Spelare2 vann!"],
        ["Sten", "Sax", "Spelare2 vann!"]
    ])("Should display that player2 won", (player2Choice, player1Choice, expected) => {
        //When
        const player1 = {
            name: "Spelare1",
            choice: player1Choice,
            isWinner: false
        }

        const player2 = {
            name: "Spelare2",
            choice: player2Choice,
            isWinner: true
        }

        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() => { }} setPlayer2={() => { }} history={[]} setHistory={() => { }} />)
        const result = screen.getByRole("heading", { level: 2 })
        //Then
        expect(result).toHaveTextContent(expected)
    })

    test.each([
        //Given
        ["Sax", "Sax", "Oavgjort!"],
        ["Påse", "Påse", "Oavgjort!"],
        ["Sten", "Sten", "Oavgjort!"]
    ])("Should display that its a tie", (player2Choice, player1Choice, expected) => {
        //When
        const player1 = {
            name: "Spelare1",
            choice: player1Choice,
            isWinner: false
        }

        const player2 = {
            name: "Spelare2",
            choice: player2Choice,
            isWinner: false
        }

        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() => { }} setPlayer2={() => { }} history={[]} setHistory={() => { }} />)
        const result = screen.getByRole("heading", { level: 2 })
        //Then
        expect(result).toHaveTextContent(expected)
    })

})