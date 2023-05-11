import { render, screen } from "@testing-library/react"
import Score from "../Score"

describe("Score", () => {
    test("Should add score on win", () => {
        //Given
        const player1 = {
            name: "Spelare1",
            choice: "Sax",
            isWinner: true
        }

        const player2 = {
            name: "Spelare2",
            choice: "Påse",
            isWinner: false
        }

        const result = "Spelare1 vann!"

        //When
        render(<Score result={result} player1={player1} player2={player2}/>)
        const score = screen.getByText(/Ställningen är/i)

        //Then
        expect(score).toHaveTextContent(/Ställningen är Spelare1: 1/i)
    })
})