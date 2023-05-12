/// <reference types="cypress" />

describe('Multiplayer test suite', () => {

    beforeEach(() => {

      cy.visit('http://localhost:3000/')

    })

    it('Should get result of Oavgjort!', () => {

        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#multi').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('input[name=player2]').click()
        
        cy.get('input[name=player2]').type("Player2")

        cy.get('button').click()

        cy.get('#make-choice-multi').should('have.text', "Gör ditt val: Player1")
        
        cy.get('button[value=Sten').click()
        
        cy.get('button[value=Sten').click()

        cy.get('#result').should('have.text', "Oavgjort!")
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')

    })
    it('Should get result of Player1 vann!', () => {

        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#multi').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('input[name=player2]').click()
        
        cy.get('input[name=player2]').type("Player2")

        cy.get('button').click()

        cy.get('#make-choice-multi').should('have.text', "Gör ditt val: Player1")
        
        cy.get('button[value=Påse').click()
        
        cy.get('button[value=Sten').click()

        cy.get('#result').should('have.text', "Player1 vann!")
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')

    })
    it('Should get result of Player2 vann!', () => {

        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#multi').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('input[name=player2]').click()
        
        cy.get('input[name=player2]').type("Player2")

        cy.get('button').click()

        cy.get('#make-choice-multi').should('have.text', "Gör ditt val: Player1")
        
        cy.get('button[value=Sax').click()
        
        cy.get('button[value=Sten').click()

        cy.get('#result').should('have.text', "Player2 vann!")
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')

    })

    
  })