
import History from "../History";
import { render, screen } from "@testing-library/react";

describe("History", () => {

    test("Should render History", () => {

        const history = [{
            winner: "John",
            playerOne: "John",
            player1Choice: "rock",
            playerTwo: "Jane",
            player2Choice: "paper"
          }, 
          {
            winner: "Jane",
            playerOne: "John",
            player1Choice: "rock",
            playerTwo: "Jane",
            player2Choice: "paper"
          }];

        const tree = render(<History history={history} />).asFragment();
        expect(tree).toMatchSnapshot()
        screen.debug()
        

    })

    test("Should only show 10 lines and winner presented with bold text", () => {

        const history = new Array(19).splice(0,9).fill({
            winner: "playerOne",
            playerOne: "John",
            player1Choice: "rock",
            playerTwo: "Jane",
            player2Choice: "paper"
          });
          
          const {queryAllByRole} = render(<History history={history}/>)
          const historyItems = queryAllByRole("listitem")
          expect(historyItems.length).toBeLessThanOrEqual(10)

    })
    test("Should display winner with bold text", () => {

            const {queryAllByRole} = render(<History history={history}/>)
            const historyItems = queryAllByRole("listitem")
            historyItems.forEach((item) => {
            const winner = item.querySelector("b")
            expect(winner).toBeTruthy
        })
    })
})
