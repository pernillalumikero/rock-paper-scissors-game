import { render, screen } from "@testing-library/react"
import DecideWinner from "../DecideWinner"

describe("DecideWinner", () => {
    test("Should display that player1 won", () => {
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

        //When
        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() =>{}} setPlayer2={() =>{}} history={[]} setHistory={() =>{}}/>)

        const result = screen.getByRole("heading", {level:2})

        //Then
        expect(result).toHaveTextContent(`Spelare1 vann!`)
    })

    test("Should display that player2 won", () => {
        //Given
        const player1 = {
            name: "Spelare1",
            choice: "Sten",
            isWinner: false
        }

        const player2= {
            name: "Spelare2",
            choice: "Påse",
            isWinner: true
        }

        //When
        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() =>{}} setPlayer2={() =>{}} history={[]} setHistory={() =>{}}/>)
        const result = screen.getByRole("heading", {level:2})

        //Then
        expect(result).toHaveTextContent(`Spelare2 vann!`)
    })

    test("Should display that it was a tie", () => {
        //Given
        const player1 = {
            name: "Spelare1",
            choice: "Sten",
            isWinner: false
        }

        const player2= {
            name: "Spelare2",
            choice: "Sten",
            isWinner: false
        }

        //When
        render(<DecideWinner player1={player1} player2={player2} setPlayer1={() =>{}} setPlayer2={() =>{}} history={[]} setHistory={() =>{}}/>)
        const result = screen.getByRole("heading", {level:2})

        //Then
        expect(result).toHaveTextContent(`Oavgjort!`)

    })

})


// //         test.each([
// //             ["Sax", "Påse", `${player1.name} vann!`],
// //             ["Påse", "Sten", `${player1.name} vann!`],
// //             ["Sten", "Sax", `${player1.name} vann!`]
// //         ])("add %i + %i should return %i", (player1.choise, player2.choice, expected) => {}
// //             //When
// //             < DecideWinner player1 = {} />
// //         //Then
// //     }
// // }

// test.each([
//     ["Sax", "Påse", "Spelare1 vann!"],
//     ["Påse", "Sten", "Spelare1 vann!"],
//     ["Sten", "Sax", "Spelare1 vann!"]
// ])("when player1 chooses %i and player2 chooses %i should return %i", (x, y, expected) => {
//     //When
//     const result = screen.getByRole("heading", {level:2})
//     //Then
//     expect(result).toHaveTextContent(expected)
// }

// // test.each([
// //     [0, 0, 0],
// //     [1, 1, 2],
// //     [998, 998, 1996],
// //     [999, 999, 1998]
// // ])("add %i + %i should return %i", (x, y, expected) => {
// //     //When
// //     const sum = add(x, y)

// //     //Then
// //     expect(sum).toBe(expected)
// // })

//     // test("Should win if papper vs rock", () => {
//     //     //Given
//     //     const user = 3
//     //     const computer = 2

//     //     //When
//     //    render(<DecideWinner user={user} computer={computer} />)

//     //    const result = screen.queryByRole("heading", {level: 3})


//     //     //Then
//     //     expect(result).toHaveTextContent('Du har vunnit!')
//     // })
//     // test("Should loose when scissor vs rock", () => {
//     //     //Given
//     //     const user = 2
//     //     const computer = 1

//     //     //When
//     //    render(<Logic user={user} computer={computer} />)

//     //    const result = screen.queryByRole("heading", {level: 3})

//     //     //Then
//     //     expect(result).toHaveTextContent('Du har förlorat!');
//     //     // expect(result).toBeInTheDocument()
//     // })
//     // test("Should get a draw", () => {
//     //     //Given
//     //     const user = 1
//     //     const computer = 1

//     //     //When
//     //    render(<Logic user={user} computer={computer} />)

//     //    const result = screen.queryByRole("heading", {level: 3})

//     //    //Then
//     //    expect(result).toHaveTextContent('Oavgjort!')
//     // })
// })

// // Should diplay who won

// // Should display text if draw

// // Should get winner when decideWinner is called

// // Should render decidewinner component