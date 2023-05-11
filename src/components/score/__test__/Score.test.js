import { render, screen } from "@testing-library/react"
import Score from "../Score"

describe("Score", () => {
    test("Should add score to player1 on win", () => {
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
        expect(score).toHaveTextContent(/Spelare1: 1/i)
    })

    test("Should add score to player2 on win", () => {
        //Given
        const player1 = {
            name: "Spelare1",
            choice: "Sax",
            isWinner: false
        }

        const player2 = {
            name: "Spelare2",
            choice: "Sten",
            isWinner: true
        }

        const result = "Spelare2 vann!"

        //When
        render(<Score result={result} player1={player1} player2={player2}/>)
        const score = screen.getByText(/Ställningen är/i)

        //Then
        expect(score).toHaveTextContent(/Spelare2: 1/i)
    })

    test("Add no scores on tie", () => {
        //Given
        const player1 = {
            name: "Spelare1",
            choice: "Sax",
            isWinner: false
        }

        const player2 = {
            name: "Spelare2",
            choice: "Sax",
            isWinner: false
        }

        const result = "Oavgjort!"

        //When
        render(<Score result={result} player1={player1} player2={player2}/>)
        const score = screen.getByText(/Ställningen är/i)

        //Then
        expect(score).toHaveTextContent(/Spelare1: 0 Spelare2: 0/i)
    })
})

