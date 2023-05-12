/// <reference types="cypress" />

describe('Singleplayer test suite', () => {

    beforeEach(() => {

      cy.visit('http://localhost:3000/')

    })

    it('Should be able to choose Rock', () => {

        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#single').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('button').click()

        cy.get('#make-choice').should('have.text', "Gör ditt val")
        
        cy.get('button[value=Sten').click()
        
        cy.get('#result').should('be.visible')
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')

    })

    it('Should be able to choose Scissor', () => {
  
        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#single').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('button').click()
  
        cy.get('#make-choice').should('have.text', "Gör ditt val")
        
        cy.get('button[value=Sax').click()
        
        cy.get('#result').should('be.visible')
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')
  
    })

    it('Should be able to choose Papper', () => {
  
        cy.get('h3').should('have.text', "Välj antal spelare")
        
        cy.get('#single').click()
        
        cy.get('input[name=player1]').click()
        
        cy.get('input[name=player1]').type("Player1")
        
        cy.get('button').click()
  
        cy.get('#make-choice').should('have.text', "Gör ditt val")
        
        cy.get('button[value=Påse').click()
        
        cy.get('#result').should('be.visible')
        
        cy.get('#score').should('be.visible')
        
        cy.get('#ul').should('be.visible')
  
    })
    
  })