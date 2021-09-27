/// <reference types="cypress" />

context('License Tests', () => {

    before(() => {
        cy.restoreProviders()
    })

    beforeEach(() => {
        cy.login()
    })
  
    it('Add License and Verify', () => {
        cy.xpath("//div[contains(@class, 'col-cell')][text()='Provider EDIT']").click()

        cy.get('[data-cy=addLicense]').click()
        cy.get('[data-cy=state]').click()
        cy.get('[data-cy=state-list] > :nth-child(1)').click()
        cy.get('[data-cy=licenseNumber]').type('123456')

        cy.wait(5000)
       
        cy.get('[data-cy=state]').click()
        cy.get('[data-cy=state-list] > :nth-child(1)').click()
        cy.get('[data-cy=licenseType]').click()
        cy.get('[data-cy=licenseType-list] > :nth-child(1)').click()
        cy.get('[data-cy="Save & Verify"]').click()
        cy.get('.title > .comp-title')
            .should('have.text', 'Alabama Controlled Substances Certificate (ACSC)')
    })
  })
  