/// <reference types="cypress" />

context('Provider Tests', () => {
    let newProvider = {};

    before(() => {
        cy.fixture('newProvider').then((data) => {
            newProvider = data
        });

       cy.restoreProviders()
    })

    beforeEach(() => {
        cy.login()
    })
  
    it('Add Provider', () => {
        cy.get('[data-cy=addProvider]').click()

        cy.get('[data-cy=firstName]').type(newProvider.firstName)
        cy.get('[data-cy=lastName]').type(newProvider.lastName)
        cy.get('[data-cy=email]').type(newProvider.email)
    
        cy.get('[data-cy=Submit]').click()

        cy.get('.comp-breadcrumb > :nth-child(2)')
            .should('have.text', `${newProvider.firstName} ${newProvider.lastName}`)
        
    })

    it('Delete Provider', () => {
        cy.xpath("//div[contains(@class, 'col-cell')][text()='Provider DELETE']").click()
        cy.get('.options [data-cy=more]').click()
        cy.get('[data-cy=removeProvider-d]').click()
        cy.get('[data-cy="Yes, remove"]').click()
        cy.get('.alert-item > .comp-alert > .message > .text')
            .should('have.text', 'Successfully deleted provider')
    })

    it('Edit Provider', () => {
        const newSchoolName = 'New School';
        cy.xpath("//div[contains(@class, 'col-cell')][text()='Provider EDIT']").click()

        cy.get('[data-cy=addEducation]').click()
        cy.get('[data-cy=schoolName]').type(newSchoolName)

        cy.get('[data-cy=Save]').click()

        cy.get("[data-cy=education-overview] .table-row > :nth-child(2) > .table-cell")
            .should('have.text', newSchoolName)
    }) 
  })
  